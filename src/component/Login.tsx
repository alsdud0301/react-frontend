import axios from "axios"
import React, { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const Login = () => {
  const [userid, setUserId] = useState<string>("")
  const [userpw, setUserPw] = useState<string>("")

  const idRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { login } = useContext(LoginContext)
  const loginsubmit = () => {
    if (!userid) {
      idRef.current?.focus()
      return
    }
    if (!userpw) {
      pwRef.current?.focus()
      return
    }

    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/users/login`,
        {
          userid: userid,
          userpw: userpw,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const { user } = res.data
        login(user)
        alert("로그인성공!")
        navigate("/main")
      })
      .catch(() => {
        alert("로그인실패!")
        navigate("/login")
      })
  }

  return (
    <>
      <header className="w-auto mt-40 grid flex-col">
        <div className="text-center">
          <p className="font-bold text-6xl text-shadow">
            <Link to="/">ROB</Link>
          </p>
        </div>
      </header>
      <section className="w-auto justify-center flex ">
        <div className="w-auto h-auto p-4 flex-col flex">
          <input
            type="text"
            className="w-128 h-16 p-4 m-4 text-xl shadow-md rounded-md border-2 border-gray-100"
            placeholder="아이디"
            ref={idRef}
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <input
            type="password"
            className="w-128 h-16 p-4 m-4 text-xl shadow-md rounded-md border-2 border-gray-100"
            placeholder="비밀번호"
            ref={pwRef}
            onChange={(e) => setUserPw(e.target.value)}
          ></input>
          <button
            className="w-128 h-16 p-2 m-4 shadow box-shadow-color-black bg-black text-white font-bold text-lg rounded-md "
            onClick={loginsubmit}
          >
            로그인
          </button>
        </div>
      </section>
      <div className="w-auto justify-center flex text-gray-500 ">
        <Link to="/signup">회원가입</Link>
        <span className="font-bold mx-3">|</span>
        <Link to="/f_ID">아이디찾기</Link>
        <span className="font-bold  mx-3">|</span>
        <Link to="/f_PWD">비밀번호 찾기</Link>
      </div>
    </>
  )
}
export default Login
