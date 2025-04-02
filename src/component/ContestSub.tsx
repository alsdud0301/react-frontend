import { faEllipsisVertical, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const ContestSub = () => {
  // 공모전 내용
  interface contestdetail {
    id: number
    title: string
    content: string
  }
  const [img, setImg] = useState(null)
  const [contestdetail, setContestDetail] = useState<contestdetail | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [ismenuopen, setIsMenuopen] = useState(false)
  const { user } = useContext(LoginContext)
  const { id: contestId } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const domainKey = process.env.REACT_APP_API_BASE_URL
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
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/contestdetail`, {
        contestid: contestId,
      })
      .then((res) => {
        console.log(res)
        setContestDetail(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [contestId])

  const Applybtn = () => {
    navigate("/applymethod")
  }
  return (
    <>
      <nav className="mx-auto justify-center w-[65rem] grid h-auto items-center mt-[2rem] ">
        <div className="w-[65rem] p-5 flex justify-between">
          <div className="font-bold text-2xl">전시제목</div>
          {/* <div className="font-bold text-2xl">{contestdetail.title}</div> */}
          <span className="w-2 cursor-pointer" onClick={toggleMenu}>
            {/* {user?.userid === contestdetail?.userid &&( */}
            <FontAwesomeIcon icon={faEllipsisVertical} className="" />
            {ismenuopen && (
              <div
                className="absolute shadow-xl w-40 h-24 bg-white"
                ref={menuRef}
              >
                <div className="grid h-full  justify-center">
                  <div className="flex justify-center">
                    <Link to="">삭제하기</Link>
                  </div>

                  <div className="flex justify-center">
                    <Link to="/applylist">지원목록보기</Link>
                  </div>
                </div>
              </div>
            )}
            {/* )} */}
          </span>
        </div>
        <div className="shadow  border-boxshadow-text-shadow-lg w-auto"></div>
      </nav>
      <section className="flex flex-col h-auto  items-center w-auto mx-auto  ">
        <div className="grid justify-center  shadow box-shadow-color-black w-256 h-[24rem] mb-2">
          {/* <img src={contestdetail.img} alt="공모전 표지"></img> */}
        </div>
        <div className=" shadow box-shadow-color-black p-12 w-256 h-auto border-[1px] ">
          {/* <div className="flex mb-6 w-full">
            <div className="mx-8 w-[10%]">지원 기간</div>
            <div className="w-[90%]">{contestdetail.applyDate}</div>
          </div>
          <div className="flex mb-6">
            <div className="mx-8 w-[10%]">전시 기간</div>
            <div className="w-[90%]">{contestdetail.Date}</div>
          </div>
          <div className="flex mb-6">
            <div className="mx-8 w-[10%]">지원 자격</div>
            <div className="w-[90%]">{contestdetail.}</div>
          </div>
          <div className="flex mb-6">
            <div className="mx-8 w-[10%]">전시 내용</div>
            <div className="w-[90%]">
             {contestdetail.content}
            </div>
          </div> */}
          <div className="flex mb-6 w-full">
            <div className="mx-8 w-[10%]">지원 기간</div>
            <div className="w-[90%]">2024.09.10 ~ 2025.10.13</div>
          </div>
          <div className="flex mb-6">
            <div className="mx-8 w-[10%]">전시 기간</div>
            <div className="w-[90%]">2024.09.10 ~ 2025.10.13</div>
          </div>
          <div className="flex mb-6">
            <div className="mx-8 w-[10%]">지원 자격</div>
            <div className="w-[90%]">지원자격은 어쩌구 저쩌구입니다</div>
          </div>
          <div className="flex mb-6">
            <div className="mx-8 w-[10%]">전시 내용</div>
            <div className="w-[90%]">
              공모전 내용입니다 공모전 내용입니다공모전 내용입니다공모전
              내용입니다공모전 내용입니다공모전 내용입니다공모전 내용입니다
              공모전 내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다 공모전
              내용입니다공모전 내용입니다공모전 내용입니다
            </div>
          </div>
        </div>
      </section>
      <footer className="w-auto mt-6">
        <hr className="w-[100%] border-[1px solid]" />
        <div className=" flex justify-center mt-6 mb-8">
          <div className="w-[65rem] justify-end flex">
            <button
              onClick={Applybtn}
              className="bg-black text-[18px]  shadow box-shadow-color-black text-white font-bold w-[10rem] h-[4rem] cursor-pointer rounded-lg"
            >
              지원하기
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
export default ContestSub
