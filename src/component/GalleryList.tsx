import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router"

const GalleryList = () => {
  const [gallerylist, setGallerylist] = useState([])
  const navigate = useNavigate()
  //갤러리 목록
  axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/galleryList`, {})
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        setGallerylist(res.data)
      }
    })
    .catch((err) => {
      console.log(err)
    })

  const galleryDetail = () => {
    navigate("/gallerydetail")
  }

  return (
    <>
      <nav className="h-auto mt-20 w-full mb-3">
        <div className="w-[90%] lg:w-[55%] mx-auto flex flex-col lg:flex-row justify-between mb-2 gap-2">
          <div className="relative flex flex-col lg:flex-row w-256 lg:w-auto">
            <p className="self-center font-bold text-xl mb-2 lg:mb-0 lg:mx-2">
              갤러리 목록
            </p>
            <div className="relative w-full lg:w-[23rem]">
              <input
                type="text"
                className="rounded-md border-gray-400 border w-full p-2 pr-10"
              />
              <FontAwesomeIcon
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
          <div className="w-256 lg:w-auto flex flex-col lg:flex-row gap-2">
            <select className="border p-2 rounded-md border-gray-400">
              <option value="">국내 갤러리</option>
              <option value="">해외 갤러리</option>
            </select>
            <select className="border p-2 rounded-md border-gray-400">
              <option value="">국내 갤러리</option>
              <option value="">해외 갤러리</option>
            </select>
            <select className="border p-2 rounded-md border-gray-400">
              <option value="">국내 갤러리</option>
              <option value="">해외 갤러리</option>
            </select>
          </div>
        </div>
      </nav>
      <section className="w-full grid gap-4">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="cursor-pointer w-[90%] lg:w-[55%] mx-auto"
              onClick={galleryDetail}
            >
              <div className="flex flex-col md:flex-row mb-4">
                <div className="border border-gray-400 shadow-lg w-full md:w-56 h-32"></div>
                <div className="px-4 mt-2 md:mt-0">
                  <p className="font-bold text-lg">ㅇㅇ갤러리</p>
                  <p className="">갤러리 한줄소개</p>
                </div>
              </div>
              <hr className="border-t border-gray-400" />
            </div>
          ))}
      </section>
      {/* 데이터 연결 시 사용 */}
      {/* <section className="w-full grid gap-4">
        {gallerylist.map((gallery) => (
          <div className="cursor-pointer w-[90%] lg:w-[55%] mx-auto"  onClick={galleryDetail}>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="border border-gray-400 shadow-lg w-full md:w-56 h-32"></div>
              <div className="px-4 mt-2 md:mt-0">
                <p className="font-bold text-lg" key={gallery.id}>
                  ㅇㅇ갤러리{gallery.content}
                </p>
                <p className="">갤러리 한줄소개{gallery.name}</p>
              </div>
            </div>
            <hr className="border-t border-gray-400" />
          </div>
        ))}
      </section> */}
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

export default GalleryList
