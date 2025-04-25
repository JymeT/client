export interface User {
  id: string
  username: string
  email: string
  createdAt: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface ApiError {
  message: string
  code?: string
  status?: number
}
