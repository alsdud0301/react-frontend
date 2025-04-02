import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect } from "react"

const Profile = () => {
  const productKey = process.env.REACT_APP_API_BASE_URL
  useEffect(() => {
    axios
      .get(`${productKey}/profile`, {})
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <section className="flex justify-center h-[100%]">
        <div className=" mt-10">
          <img
            className="w-40 h-40 rounded-full border border-black"
            src="../img.jpg"
            alt="프로필사진"
          ></img>
        </div>
        <div className="w-[40%] mx-12">
          <div className="flex">
            <div className="w-full font-bold mt-10 flex justify-between  border-b-black ">
              <span className="text-2xl">ㅇㅇ갤러리</span>
              <span>
                <button className="bg-black text-white w-36 rounded-lg ">
                  서브 계정 요청
                </button>
              </span>
            </div>
          </div>
          <hr className="border-gray-700"></hr>
          <div className="mx-6">
            <p className="my-2 font-bold text-lg">
              갤러리 한줄 소개~~~~~~~~~~~~
            </p>
            <span className="">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </span>
            <span className="mx-4 font-bold text-lg"> example@naver.com</span>
          </div>

          <div className="my-5">
            <p className="font-bold ">서브 계정</p>
            <div className="border border-black p-4 flex">
              <div className="w-32 mx-4">
                <img
                  className="w-32 h-32 shadow-lg rounded-full"
                  src="./boat.jpg"
                  alt="이미지"
                ></img>
                <p className="flex justify-self-center mt-3">부계정1</p>
              </div>
              <div className="w-32 mx-4">
                <img
                  className="w-32 h-32 shadow-lg rounded-full"
                  src="./boat.jpg"
                  alt="이미지"
                ></img>
                <p className="flex justify-self-center mt-3">부계정2</p>
              </div>
            </div>
            <div className="my-5">
              <p className="font-bold">모집완료 공모전</p>
              <div className="w-auto h-auto">
                <div className="border border-gray-400 p-4">
                  <div className=" w-36 h-auto">
                    <img
                      className="border border-black w-36 h-28"
                      src=""
                      alt="이미지"
                    ></img>
                    <p className="w-36 ">ㅇㅇ갤러리에서 작가모집합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className="font-bold">진행 중인 공모전</p>
              <div className="w-auto h-auto">
                <div className="border border-gray-400 p-4">
                  <div className=" w-36 h-auto">
                    <img
                      className="border border-black w-36 h-28"
                      src=""
                      alt="이미지"
                    ></img>
                    <p className="w-36 ">ㅇㅇ갤러리에서 작가모집합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12">
        <hr className=""></hr>
      </footer>
      {/* 작가 프로필 */}
      <section className="flex justify-center h-[100%]">
        <div className=" mt-10">
          <img
            className="w-40 h-40 rounded-full border border-black"
            src="../img.jpg"
            alt="프로필사진"
          ></img>
        </div>
        <div className="w-[40%] mx-12">
          <div className="flex">
            <div className="w-full font-bold mt-10 flex justify-between  border-b-black ">
              <span className="text-2xl">ㅇㅇ갤러리</span>
              <span>
                <button className="bg-black text-white w-36 rounded-lg ">
                  서브 계정 요청
                </button>
              </span>
            </div>
          </div>
          <hr className="border-gray-700"></hr>
          <div className="mx-6">
            <p className="my-2 font-bold text-lg">
              갤러리 한줄 소개~~~~~~~~~~~~
            </p>
            <span className="">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </span>
            <span className="mx-4 font-bold text-lg"> example@naver.com</span>
          </div>

          <div className="my-5">
            <p className="font-bold ">서브 계정</p>
            <div className="border border-black p-4 flex">
              <div className="w-32 mx-4">
                <img
                  className="w-32 h-32 shadow-lg rounded-full"
                  src="./boat.jpg"
                  alt="이미지"
                ></img>
                <p className="flex justify-self-center mt-3">부계정1</p>
              </div>
              <div className="w-32 mx-4">
                <img
                  className="w-32 h-32 shadow-lg rounded-full"
                  src="./boat.jpg"
                  alt="이미지"
                ></img>
                <p className="flex justify-self-center mt-3">부계정2</p>
              </div>
            </div>
            <div className="my-5">
              <p className="font-bold">모집완료 공모전</p>
              <div className="w-auto h-auto">
                <div className="border border-gray-400 p-4">
                  <div className=" w-36 h-auto">
                    <img
                      className="border border-black w-36 h-28"
                      src=""
                      alt="이미지"
                    ></img>
                    <p className="w-36 ">ㅇㅇ갤러리에서 작가모집합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className="font-bold">진행 중인 공모전</p>
              <div className="w-auto h-auto">
                <div className="border border-gray-400 p-4">
                  <div className=" w-36 h-auto">
                    <img
                      className="border border-black w-36 h-28"
                      src=""
                      alt="이미지"
                    ></img>
                    <p className="w-36 ">ㅇㅇ갤러리에서 작가모집합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12">
        <hr className=""></hr>
      </footer>
    </>
  )
}
export default Profile
