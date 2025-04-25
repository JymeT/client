import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { AxiosError } from 'axios'
import axios from '../lib/axios'

type User = {
  id: number
  username: string
  email: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access_token')
      if (token) {
        try {
          const res = await axios.get<User>('/user/')
          setUser(res.data)
        } catch (err) {
          if (err instanceof AxiosError && err.response?.status === 401) {
            logout()
          }
        }
      }
      setLoading(false)
    }
    checkAuth()
  }, [])

  const login = async (username: string, password: string) => {
    const res = await axios.post<{ access: string; refresh: string }>('/token/', {
      username,
      password,
    })
    localStorage.setItem('access_token', res.data.access)
    localStorage.setItem('refresh_token', res.data.refresh)
    const userRes = await axios.get<User>('/user/')
    setUser(userRes.data)
  }

  const register = async (username: string, email: string, password: string) => {
    await axios.post('/register/', { username, email, password })
    await login(username, password)
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
