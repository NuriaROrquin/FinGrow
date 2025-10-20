"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type UserRole = "empleado" | "empresa"

interface AuthContextType {
  role: UserRole
  setRole: (role: UserRole) => void
  userName: string
  setUserName: (name: string) => void
  isAuthenticated: boolean
  login: (role: UserRole, name: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>("empleado")
  const [userName, setUserName] = useState("Usuario")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const login = (userRole: UserRole, name: string) => {
    setRole(userRole)
    setUserName(name)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ role, setRole, userName, setUserName, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider")
  }
  return context
}
