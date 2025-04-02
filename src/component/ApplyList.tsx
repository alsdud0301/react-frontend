import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const ApplyList = () => {
  const { isLogin } = useContext(LoginContext)
  const [applyList, setApplyList] = useState<ApplyList[]>([])
  const domainKey = process.env.REACT_APP_API_BASE_URL
  interface ApplyList {
    applyId: number
    title: string
    username: string
    date: string
  }
  useEffect(() => {
    axios
      .get(`${domainKey}/applyList`)
      .then((res) => {
        console.log(res)
        setApplyList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className="flex justify-center w-full">
      <div className="w-256 my-20">
        <div className="">
          <p className="font-bold text-[20px]">ㅇㅇ공모전 지원자 목록</p>
        </div>

        <div className="border-t-[1px] border-black w-256">
          <div className="w-256 flex border-b-[1px] border-black py-2 ">
            <p className="font-bold w-[50%] ">지원 제목</p>
            <p className="font-bold w-[30%]">이름</p>
            <p className="font-bold w-[20%]">지원 날짜</p>
          </div>
          {/* <div className="">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="flex border-b-[1px] border-black py-2"
                >
                  <p className="w-[50%]">
                    <Link to="/portfoliodetail">
                      ㅇㅇㅇ지원자의 포트폴리오입니다.
                    </Link>
                  </p>
                  <p className="w-[30%]">홍길동</p>
                  <p className="w-[20%]">2025-01-12</p>
                </div>
              ))}
          </div> */}
          {/* 데이터 받아서 출력하는 부분 */}
          <div className="">
            {applyList.map((apply) => (
              <div className="flex border-b-[1px] border-black py-2">
                <p className="w-[50%]">{apply.title}</p>
                <p className="w-[30%]">{apply.username}</p>
                <p className="w-[20%]">{apply.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ApplyList
