import axios from "axios"
import React, { useRef, useState } from "react"
import { useNavigate } from "react-router"

const SelectDate = () => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const navigate = useNavigate()
  const DateRef1 = useRef<HTMLInputElement>(null)
  const DateRef2 = useRef<HTMLInputElement>(null)
  const domainKey = process.env.REACT_APP_API_BASE_URL
  const payClick = () => {
    navigate("/createroom")
    // navigate(`${domainKey}/createroom`)
    console.log(DateRef1.current?.value)
    if (
      DateRef1.current?.value !== "" &&
      DateRef2.current?.value !== "" &&
      startDate < endDate
    ) {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/selectDate`)
        .then(() => {
          navigate("/createroom")
        })
    } else {
      alert("날짜를 선택해주세요")
    }
  }
  return (
    <>
      <nav className="flex justify-center h-32 ">
        <div className="w-256 content-end ">
          <p className="font-bold text-xl m-4">갤러리 방 기간 설정</p>
        </div>
      </nav>
      <section className="flex flex-col justify-center">
        <div className="border border-black mx-auto w-256 h-44 p-5">
          <p>여기는 예시 글입니다</p>
        </div>
        <div className=" mt-3 shadow-xl  mx-auto w-256 h-56">
          <div className="text-lg font-bold bg-gray-200  float-left w-[30%] h-full content-center justify-center grid">
            <p>이용 날짜</p>
          </div>
          <div className="float-right w-[70%] h-full p-5 font-bold">
            <input
              ref={DateRef1}
              type="date"
              className="border border-black mx-5 p-1"
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
            <span>~</span>
            <input
              ref={DateRef2}
              type="date"
              className="border border-black mx-5 p-1"
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex w-256 mx-auto float-right justify-end mt-6">
          <input
            type="button"
            className="bg-black text-white w-40 h-12 rounded-xl
            "
            value="결제하기"
            onClick={payClick}
          />
        </div>
      </section>
    </>
  )
}

export default SelectDate
