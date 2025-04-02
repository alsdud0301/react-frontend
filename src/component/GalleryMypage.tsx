import { faCircleXmark, faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useRef, useState } from "react"

const GalleryMypage = () => {
  const [activeTab, setActiveTab] = useState<string>("createcontest") // 초기값 설정
  const [createcontest, setCreatecontest] = useState([]) //생성공모전 데이터
  const [accountTab, setAccountTab] = useState<string>("subaccountM") //계정관리 탭
  const imgref = useRef(null)
  const listyle = "font-bold w-60 justify-center flex py-8"
  const mainstyle = "h-200 mx-10 "
  const liRef: any = useRef([])

  // document?.addEventListener("click", function () {
  //   console.log("안녕")
  //   for (let i = 0; i < 4; i++) {
  //     if (liRef[i] == null) {
  //       localStorage.setItem("menutab", "")
  //       console.log(localStorage.getItem("menutab"))
  //       if (localStorage.getItem("menutab") === "") {
  //         setActiveTab("createcontest")
  //       }
  //       if (localStorage.getItem("menutab") != null) {
  //         setActiveTab(JSON.stringify(localStorage.getItem("menutab")))
  //       }
  //     }
  //     console.log(liRef[i])
  //   }
  // })
  // localStorage.setItem("menutab", activeTab)
  // localStorage.removeItem("menutab")
  // if (localStorage.getItem("menutab") == null) {
  //   setActiveTab("createcontest")
  // } else {
  //   setActiveTab(JSON.stringify(localStorage.getItem("menutab")))
  // }
  const profileImg = () => {}
  useEffect(() => {
    // 지원공모전 목록
    // axios
    //   .get("/applycontest")
    //   .then((res) => {
    //     setCreatecontest(res.data)
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // //즐겨찾기 목록
    // axios
    //   .get("/apply")
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  })
  return (
    <section className="grid justify-center h-[100%]  my-[1.5%]">
      <div className="flex">
        {/* 사이드바 */}
        <div className="border border-black h-200 shadow-xl mx-10">
          <ul>
            <li
              ref={liRef[0]}
              onClick={() => setActiveTab("createcontest")}
              className={listyle}
            >
              생성 공모전
            </li>
            <li
              ref={liRef[1]}
              onClick={() => setActiveTab("applicant")}
              className={listyle}
            >
              지원자 목록
            </li>
            <li
              ref={liRef[2]}
              onClick={() => setActiveTab("message")}
              className={listyle}
            >
              쪽지함
            </li>
            <li
              ref={liRef[3]}
              onClick={() => setActiveTab("account")}
              className={listyle}
            >
              계정 관리
            </li>
          </ul>
        </div>
        {/* 탭 내용 */}
        {activeTab === "createcontest" && (
          <main className={mainstyle}>
            <div className="flex ">
              <section className="">
                <div className="flex justify-between w-[60rem]">
                  <p className="font-bold text-2xl">생성 공모전 목록</p>
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

                <div className="my-4">
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="flex my-6">
                        <div className="border shadow-lg w-52 h-32">
                          <img
                            className="w-auto h-32"
                            src="../img.jpg"
                            alt="logo"
                          ></img>
                        </div>
                        <div className="px-6">
                          <p className="my-3 font-bold text-[18px]">
                            공모전 제목
                          </p>

                          <p className="my-2 ">ㅇㅇ갤러리에서 모집합니다</p>

                          <p className="my-3 text-gray-600">
                            2024.10.01~2024.11.01
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </main>
        )}
        {activeTab === "applicant" && (
          <main className={mainstyle}>
            <div className="flex">
              <section className="">
                <div className="flex justify-between w-[60rem]">
                  <p className="font-bold text-2xl">지원자 목록</p>
                </div>
                <hr className="border border-black"></hr>
                <div className="my-4">
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="flex my-6">
                        <div className="border shadow-lg w-52 h-32">
                          <img
                            className="w-auto h-32"
                            src="../img.jpg"
                            alt="logo"
                          ></img>
                        </div>
                        <div className="px-6">
                          <p className="my-3 font-bold text-[18px]">
                            ㅇㅇ갤러리에 지원합니다
                          </p>

                          <p className="my-2 ">ㅁㅁㅁ지원자</p>

                          <p className="my-3 text-gray-600">
                            2024.10.01~2024.11.01
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </main>
        )}
        {activeTab === "message" && (
          <main className={mainstyle}>
            <div className="flex">
              <section className="">
                <div className="flex justify-between w-[60rem]">
                  <p className="font-bold text-2xl">쪽지함</p>
                </div>
                <hr className="border border-gray-700"></hr>
                <div className="shadow-xl h-[95%] mt-1">
                  <div className="left">
                    <input type="file" id="file"></input>
                  </div>
                </div>
              </section>
            </div>
          </main>
        )}
        {activeTab === "account" && (
          <main className={mainstyle}>
            <div className="flex">
              <section className="">
                <div className="flex justify-between w-[60rem]">
                  <p className="font-bold text-2xl">계정 관리</p>
                </div>
                <hr className="border border-gray-700"></hr>
                <div className="shadow-xl h-[95%] mt-1">
                  <div className="left">
                    <input type="file" id="file"></input>
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="flex justify-between">
                      <div className="">
                        <button
                          onClick={() => setAccountTab("subaccountM")}
                          className=""
                        >
                          서브 계정 관리
                        </button>
                        <button
                          onClick={() => setAccountTab("subAccountreq")}
                          className=""
                        >
                          서브 계정 요청
                        </button>
                      </div>
                      <div className="">
                        <button className="">+계정추가</button>
                      </div>
                      {accountTab === "subaccount" && (
                        <div className="">
                          <div className="">
                            <p className="">갤러리 부계정1</p>
                            <p className="">알림1</p>
                          </div>
                        </div>
                      )}
                      {accountTab === "subAccountreq" && (
                        <div className="">
                          <p className="">갤러리 부계정1</p>
                          <p className="">
                            <button className="">
                              <FontAwesomeIcon
                                icon={faSquareCheck}
                                style={{ color: "#09953f" }}
                              />
                            </button>
                            <button className="">
                              <FontAwesomeIcon
                                icon={faCircleXmark}
                                style={{ color: "#9d0202" }}
                              />
                            </button>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        )}
      </div>
    </section>
  )
}

export default GalleryMypage
