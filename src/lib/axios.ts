import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
})

let isRefreshing = false

let failedQueue: {
  resolve: (value: unknown) => void
  reject: (reason?: unknown) => void
}[] = []

const processQueue = (error: Error | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error)
    } else {
      promise.resolve(undefined)
    }
  })
  failedQueue = []
}

const getAccessToken = (): string | null => localStorage.getItem('access_token')
const getRefreshToken = (): string | null => localStorage.getItem('refresh_token')
const setAccessToken = (token: string): void => localStorage.setItem('access_token', token)
const clearTokens = (): void => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }

    // Only handle 401 errors that haven't been retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      // If token refresh is already in progress, queue this request
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(() => {
            return axiosInstance(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true

      const refreshToken = getRefreshToken()

      if (!refreshToken) {
        isRefreshing = false
        clearTokens()
        window.location.href = '/login'
        return Promise.reject(new Error('No refresh token available'))
      }

      try {
        const res = await axios.post<{ access: string }>(`${axiosInstance.defaults.baseURL}token/refresh/`, {
          refresh: refreshToken,
        })

        setAccessToken(res.data.access)

        processQueue()
        isRefreshing = false

        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${res.data.access}`
        }

        return axiosInstance(originalRequest)
      } catch (err) {
        console.error('Refresh token failed', err)
        clearTokens()
        processQueue(err as Error)
        isRefreshing = false

        window.location.href = '/login'
        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
