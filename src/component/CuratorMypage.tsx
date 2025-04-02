import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CuratorMypage = () => {
  const [activeTab, setActiveTab] = useState("applycontest")
  const [user, setUser] = useState("author")
  const listyle = "font-bold w-60 justify-center flex py-8"
  const mainstyle = "h-[50rem] mx-10 "
  const domainKey = process.env.REACT_APP_API_BASE_URL
  useEffect(() => {
    axios
      .post(`${domainKey}/users/info`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data)
      })
  })
  return (
    <section className="grid justify-center h-[100%]  my-[4%]">
      <div className="flex ">
        <div className="border border-black h-[50rem] shadow-xl mx-10">
          <ul className="">
            <li
              onClick={() => setActiveTab("applycontest")}
              className={listyle}
            >
              지원 공모전
            </li>
            <li
              onClick={() => setActiveTab("gallerybookmark")}
              className={listyle}
            >
              갤러리 즐겨찾기
            </li>
            <li onClick={() => setActiveTab("message")} className={listyle}>
              쪽지함
            </li>
            <li onClick={() => setActiveTab("portfolio")} className={listyle}>
              포트폴리오
            </li>
            <li onClick={() => setActiveTab("account")} className={listyle}>
              계정 관리
            </li>
          </ul>
        </div>
        {/* 지원공모전 목록 */}
        {activeTab === "applycontest" && (
          <main className={mainstyle}>
            <div className="flex">
              <section className="">
                <div className="flex justify-between w-[60rem]">
                  <p className="font-bold text-2xl">지원 공모전 목록</p>
                  <div className="">
                    <button className="font-bold bg-black text-white h-8 px-2 my-2 mx-2">
                      진행 중인 공모전
                    </button>
                    <button className="font-bold bg-black text-white h-8 px-2 my-2 mx-2">
                      모집 완료 공모전
                    </button>
                  </div>
                </div>
                <hr className="border border-black"></hr>
                <div className="">
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="">
                        <div className="">
                          <p>이미지</p>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </main>
        )}
        {/*갤러리 즐겨찾기 */}
        {activeTab === "gallerybookmark" && (
          <main className={mainstyle}>
            <div className="flex">
              <section className="">
                <div className="flex justify-between w-[60rem]">
                  <p className="font-bold text-2xl">갤러리 즐겨찾기</p>
                </div>
                <hr className="border border-black"></hr>
                <div className="">
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="">
                        <div className="">
                          <p>이미지</p>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </main>
        )}
        {activeTab === "portfolio" && (
          <main className={mainstyle}>
            <div className="flex">
              <section className="">
                <div className="w-[60rem]">
                  <p className="font-bold text-2xl">포트폴리오</p>
                  <Link
                    to="/RegisterPortfolio"
                    className="border border-gray-600 my-6 w-64 rounded-md shadow-md h-36 flex justify-center items-center cursor-pointer "
                  >
                    <p className="px-2 text-base font-bold ">포트폴리오 작성</p>
                    <FontAwesomeIcon
                      className="px-2"
                      icon={faCirclePlus}
                      size="lg"
                      style={{ color: "#000000" }}
                    />
                  </Link>
                </div>
              </section>
            </div>
          </main>
        )}
      </div>
    </section>
  )
}
export default CuratorMypage
