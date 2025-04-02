import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Modal from "react-modal"
import MessageModal from "./MessageModal"

const PortfolioDetail = () => {
  const navigate = useNavigate()
  const [apply, setApplyList] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/applyList`)
      .then((res) => {
        console.log(res)
        setApplyList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const applyList = () => {
    navigate("/applyList")
  }
  const suggestbtn = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/suggest`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const MessagePopup = () => {
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <section className="w-auto flex justify-center">
      <div className="my-16 w-256">
        <div className="w-256">
          <input
            type="button"
            className="rounded-xl bg-black text-white font-bold p-2 cursor-pointer"
            value="< 지원자 목록"
            onClick={applyList}
          ></input>
        </div>
        <div className="w-256 flex mt-6">
          <div className="w-[20%] ">
            <div className="">
              <img src="./boat.jpg" alt="사진" className="w-40 h-60"></img>
            </div>
          </div>
          <div className="w-[80%] ml-4">
            <div className="flex justify-between">
              <span className="font-bold text-2xl p-1">ㅇㅇㅇ작가</span>
              <span className="mx-4 p-1">
                <button
                  onClick={MessagePopup}
                  className="border-black border-2 rounded-xl w-32 hover:bg-black hover:text-white font-bold shadow-lg duration-200"
                >
                  쪽지보내기
                  {/* <FontAwesomeIcon
                    icon={faMessage}
                    className=""
                    style={{ color: "#000000" }}
                  /> */}
                  <MessageModal
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                  />
                </button>
              </span>
            </div>
            <div className="shadow-lg w-full p-3 rounded-md mb-6">
              포트폴리오 제목
            </div>
            <div className="">
              <p className="font-bold mb-2">전시 이력</p>
              <div className="border-black border-[1px] shadow-lg p-8 w-full rounded-md">
                <div className="border-black border-[1px] p-3 mb-3">
                  전시 제목
                </div>
                <div className="flex justify-between">
                  <div className="border-black border-[1px] w-[35%] p-2 my-6">
                    전시 기간
                  </div>
                  <div className="border-black border-[1px] w-[60%] p-2 my-6">
                    포트폴리오.pdf
                  </div>
                </div>
                <div className="border-black border-[1px] h-40 shadow-lg p-3 overflow-auto">
                  전시 내용
                </div>
              </div>
              <p className="font-bold mb-2 mt-8">자기소개</p>
              <div className="border-black border-[1px] shadow-lg p-8 w-full rounded-md">
                <div className="border-black border-[1px] p-3 mb-3">
                  자기소개 제목
                </div>

                <div className="border-black border-[1px] h-48 shadow-lg p-3 ">
                  자기소개 내용
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-256 my-6">
          <input
            type="button"
            className="bg-black text-white font-bold w-36 p-2 rounded-lg"
            value="제안하기"
            onClick={suggestbtn}
          ></input>
        </div>
      </div>
    </section>
  )
}
export default PortfolioDetail
