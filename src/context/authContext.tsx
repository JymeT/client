import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { AxiosError } from 'axios'
import axios from '../lib/axios'

type User = {
  name: string
  email: string
  phone: string
  id: number
  is_active: boolean
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string, phone: string) => Promise<void>
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
          const res = await axios.get<User>('/users/me')
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
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    const res = await axios.post<{ access_token: string }>('/auth/login', formData)

    console.log({
      res,
    })

    localStorage.setItem('access_token', res.data.access_token)
    const userRes = await axios.get<User>('/users/me', {
      headers: {
        Authorization: `Bearer ${res.data.access_token}`,
      },
    })
    console.log({
      userRes,
    });
    
    setUser(userRes.data)
  }

  const register = async (username: string, email: string, password: string, phone: string) => {
    await axios.post('/users', { name: username, email: email, password: password, phone: phone })
    // await login(email, password)
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
