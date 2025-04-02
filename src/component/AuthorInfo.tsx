import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useState } from "react"

const AuthorInfo = () => {
  // 작가 정보 목록
  const [authorInfo, setAuthofInfo] = useState([])
  const domainKey = process.env.REACT_APP_API_BASE_URL
  useEffect(() => {
    axios
      .get(`${domainKey}/authorInfo`)
      .then((res) => {
        setAuthofInfo(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <nav className="h-auto mt-8 w-auto mb-3">
        <div className="w-[55%] mx-auto justify-between flex mb-2">
          <div className="relative flex w-auto h-auto">
            <p className=" self-center font-bold text-xl mx-2">작가 목록</p>
            <input
              type="text"
              name=""
              className="rounded-md border-gray-400 border w-[23rem] p-1"
            ></input>
            <FontAwesomeIcon
              className="absolute top-2 right-3 "
              icon={faMagnifyingGlass}
            />
          </div>
          <div className="w-auto">
            <select className="border p-1 rounded-md border-gray-400 mx-1">
              <option value="">국내</option>
              <option value="">해외</option>
            </select>
            <select className="border p-1 rounded-md border-gray-400 mx-1">
              <option value="">국내 갤러리</option>
              <option value="">해외 갤러리</option>
            </select>
            <select className="border p-1 rounded-md border-gray-400 mx-1">
              <option value="">국내 갤러리</option>
              <option value="">해외 갤러리</option>
            </select>
          </div>
        </div>

        {/* <hr className="border-1 w-auto mx-auto border-gray-400"></hr> */}
      </nav>
      <section className=" w-[100%] mx-auto ">
        <div className="grid w-[60%] justify-center mx-auto grid-cols-2 border border-black">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <div className=" border border-stone-500 flex p-8">
                <div className="border border-stone-500 w-36 h-36 shadow-lg"></div>
                <div className="p-4">
                  <p className="font-bold text-lg">작가이름</p>
                  <p className="">포트폴리오 내용</p>
                </div>
              </div>
            ))}
          {/* {authorInfo.map((info) => (
            <div className=" border border-stone-500 flex p-8">
              <div className="border border-stone-500 w-36 h-36 shadow-lg"></div>
              <div className="p-4">
                <p className="font-bold text-lg">작가이름{info.id}</p>
                <p className="">포트폴리오 내용{info.content}</p>
              </div>
            </div>
          ))} */}
        </div>
      </section>
      <footer className="w-auto">
        <div className="my-[30px] flex justify-center">
          <button className="mx-[10px] font-bold shadow box-shadow-color-black border-1 w-[35px] h-[35px]">
            1
          </button>
          <button className="mx-[10px] font-bold shadow box-shadow-color-black border-1 w-[35px] h-[35px]">
            2
          </button>
          <button className="mx-[10px] font-bold shadow box-shadow-color-black border-1 w-[35px] h-[35px]">
            3
          </button>
          <button className="mx-[10px] font-bold shadow box-shadow-color-black border-1 w-[35px] h-[35px]">
            4
          </button>
          <button className="mx-[10px] font-bold shadow box-shadow-color-black border-1 w-[35px] h-[35px]">
            5
          </button>
        </div>
      </footer>
    </>
  )
}

export default AuthorInfo
