import {
  faBell,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const Menubar = () => {
  const { isLogin, logout } = useContext(LoginContext)
  const [isMenuOpen, setIsMenuopen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null!)

  const toggleMenu = () => {
    setIsMenuopen((prev) => !prev) // 이전 상태를 토글
  }
  const handleClickOutside = (event: MouseEvent) => {
    // 메뉴 영역 외부 클릭 시 닫기
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuopen(false)
    }
  }
  const closeMenu = () => {
    setIsMenuopen(false)
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <>
      <nav className="grid justify-center mx-auto mt-[2rem] ">
        <div className="flex items-center mb-[0.5rem]">
          <div className="text-4xl font-bold ">
            <Link to="/">ROB</Link>
          </div>
          <div className="relative mx-4 h-[30px] w-auto">
            <input
              type="text"
              className="border-[2px] h-8 text-[12px] border-black rounded-lg w-80 p-2"
              placeholder="검색"
            ></input>
            <FontAwesomeIcon
              className="absolute right-3 top-2"
              icon={faMagnifyingGlass}
            />
          </div>
        </div>
        <div className="flex justify-between  ">
          <ul className="flex text-[18px] mr-[10rem]">
            <li className="w-24 font-bold text-center h-[3rem] leading-[3rem] ">
              <Link
                className="hover:underline hover:text-gray-700 "
                to="/gallerylist"
              >
                갤러리
              </Link>
            </li>
            <li className="w-24 font-bold text-center h-[3rem] leading-[3rem]">
              <Link
                className="hover:underline hover:text-gray-700 "
                to="/contestlist"
              >
                공모전
              </Link>
            </li>
            <li className="w-24 font-bold text-center h-[3rem] leading-[3rem]">
              <Link
                className="hover:underline hover:text-gray-700 "
                to="/authorInfo"
              >
                작가정보
              </Link>
            </li>
            <li className="w-24 font-bold text-center h-[3rem] leading-[3rem]">
              <Link
                className="hover:underline hover:text-gray-700 "
                to="/support"
              >
                고객센터
              </Link>
            </li>
          </ul>
          <ul className="relative w-auto flex justify-center items-center text-[14px] ">
            <li className="border-2 shadow-md border-black p-1 rounded-2xl font-bold text-center hover:bg-black hover:text-white transition duration-300 ">
              <Link to="/portfoliotype">포트폴리오 등록</Link>
            </li>

            {isLogin && (
              <>
                <li className="w-20 font-bold text-center h-[3rem] leading-[3rem]">
                  <FontAwesomeIcon icon={faBell} size="xl" />
                </li>
                <li className="w-20 font-bold text-center h-[3rem] leading-[3rem]">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="xl"
                    className="cursor-pointer"
                    onClick={toggleMenu}
                  />
                </li>
                {isMenuOpen && (
                  <div
                    className="absolute shadow-2xl w-44 justify-center grid border left-64 top-8 bg-white font-bold text-md "
                    ref={menuRef}
                  >
                    <div className="m-2 p-2 grid justify-center hover:text-gray-700 hover:underline">
                      <Link onClick={closeMenu} to="/profile">
                        내 프로필
                      </Link>
                    </div>
                    <div className="m-2 p-2  grid justify-center hover:text-gray-700 hover:underline">
                      <Link onClick={closeMenu} to="/mypage">
                        마이페이지
                      </Link>
                    </div>
                  </div>
                )}

                <li className="w-24 font-bold text-center h-[3rem] leading-[3rem]">
                  <button
                    onClick={logout}
                    className="font-bold hover:underline hover:text-gray-700"
                  >
                    로그아웃
                  </button>
                </li>
              </>
            )}
            {!isLogin && (
              <>
                <>
                  <li className="w-24 font-bold text-center h-[3rem] leading-[3rem]">
                    <Link to="/login">로그인</Link>
                  </li>
                  <span className="leading-[3rem]">|</span>
                  <li className="w-24 font-bold text-center h-[3rem] leading-[3rem]">
                    <Link to="/signup">회원가입</Link>
                  </li>
                </>
              </>
            )}
          </ul>
        </div>
      </nav>
      <hr className=""></hr>
    </>
  )
}

export default Menubar
