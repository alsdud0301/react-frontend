import axios from "axios"
import React, { createContext, useState } from "react"
import { useNavigate } from "react-router"

interface AuthProviderProps {
  children: React.ReactNode
}

export const LoginContext = createContext<{
  isLogin: boolean
  user: any
  login: (user: any) => void
  logout: () => void
}>({
  isLogin: false,
  user: null,
  login: () => {},
  logout: () => {},
})
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const login = (user: any) => {
    setIsLogin(true)
    setUser(user)
  }

  const logout = () => {
    axios
      .post("/users/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res)
        alert("로그아웃 성공")
        setIsLogin(false)
        setUser(null)
        navigate("/main")
      })
      .catch((err) => {
        console.log(err)
        alert("로그아웃 실패")
        navigate("/login")
      })
  }

  return (
    <LoginContext.Provider value={{ isLogin, user, login, logout }}>
      {children}
    </LoginContext.Provider>
  )
}
