import axios from "axios"
import React, { useEffect, useState } from "react"

import { Link, useNavigate } from "react-router-dom"

interface Contest {
  id: number
  content: string
  galleryname: string
}
const ContestList = () => {
  // 공모전 목록게시판
  const [isVisible, setIsVisible] = useState(false)
  const [contestid, setContestid] = useState("")
  const [contestlist, setContestlist] = useState<Contest[]>([])
  const domainKey = process.env.REACT_APP_API_BASE_URL
  const menustyle =
    "font-bold  text-[17px] border-2 w-64 h-12 rounded-md shadow box-shadow-color-black  hover:bg-black hover:text-white transition duration-300 "
  const getContestList = () => {
    axios
      .get(`${domainKey}/contestlist`)
      .then((res) => {
        console.log(res.data)
        setContestlist(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getContestList()
  }, [])
  const navigate = useNavigate()
  const btnClick = () => {
    navigate("/selectdate")
  }
  const mouseenter = () => {
    setIsVisible(true)
  }
  const mouseleave = () => {
    setIsVisible(false)
  }

  return (
    <>
      <nav className="justify-center  grid mt-12 w-full ">
        <div className="w-256">
          <p className="font-bold text-[20px]">전체 공모전</p>
        </div>
        <div className="mt-3 flex gap-8 w-256">
          <button
            className={menustyle}
            onMouseEnter={mouseenter}
            onMouseLeave={mouseleave}
          >
            아시아
          </button>
          <button className={menustyle}>유럽</button>
          <button className={menustyle}>아프리카</button>
          <button className={menustyle}>오세아니아</button>
          <button className={menustyle}>북아메리카</button>
          <button className={menustyle}>남아메리카</button>
        </div>
        {/* 메뉴에 마우스올릴 시 div 뜨는 부분*/}
        {isVisible && (
          <div className=" absolute  opacity-90  bg-white border-2 border-gray shadow box-shadow-color-black "></div>
        )}
        <div className=" flex justify-end mt-6 w-full">
          <select className="border-[1px] mr-4 w-40 h-12">
            <option value="">진행중인 공모전</option>
            <option value="">모집완료된 공모전</option>
          </select>
          <select className="border-[1px] mr-4 w-40 h-12">
            <option value="">마감일 빠른순</option>
            <option value="">마감일 느린순</option>
          </select>
          <button
            className=" w-32 h-12 font-bold bg-black text-white  rounded-[10px] shadow box-shadow-color-black border-2"
            onClick={btnClick}
          >
            방 생성
          </button>
        </div>
      </nav>

      <section className="w-full grid  justify-center mt-5">
        <div className="w-256 grid grid-cols-5 gap-6">
          {/* <hr className="w-auto border-black"></hr> */}
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex  w-auto justify-center">
                <div className="flex">
                  <div className=" w-auto h-auto cursor-pointer">
                    <Link to="/contestsub">
                      <img
                        className="w-68 h-30"
                        src="./img2.png"
                        alt="img"
                      ></img>
                    </Link>
                    <div className=" h-auto py-3 ">
                      <ul className="">
                        <li className="font-semibold mb-3">
                          해당 작품 작가 모집합니다
                        </li>
                        <li className="mt-1 mb-3 text-gray-600 font-bold">
                          ㅇㅇ갤러리
                        </li>

                        <li className="">기간 2024.10.01~2024.11.01</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* 데이터 연결 시 사용 */}
          {contestlist.map((contest) => (
            <div className="flex  w-auto justify-center">
              <div className="flex">
                <div
                  className=" w-auto h-auto cursor-pointer"
                  onClick={() => navigate(`/contest/${contest.id}`)}
                >
                  <img className="w-40 h-30" src="./img2.png" alt="img"></img>
                  <div className=" h-auto py-3 ">
                    <ul className="">
                      <li className="font-semibold mb-3" key={contest.id}>
                        해당 작품 작가 모집합니다{contest.content}
                      </li>
                      <li className="mt-1 mb-3 text-gray-600 font-bold">
                        ㅇㅇ갤러리 {contest.galleryname}
                      </li>

                      <li className="">기간 2024.10.01~2024.11.01</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <hr className="w-[1280px] border-black"></hr> */}
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

export default ContestList
