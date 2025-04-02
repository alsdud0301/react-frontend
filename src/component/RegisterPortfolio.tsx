import { faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"

const Register_Portfolio = () => {
  const [user, setUser] = useState()
  const [file, setFile] = useState<File | undefined>()
  const [contestTitle, setContestTitle] = useState("")
  const [contestDate, setContestDate] = useState("")
  const [experience, setExperience] = useState("")
  const [content, setContent] = useState("")
  const [introduction, setIntroduction] = useState({
    title: "",
    content: "",
  })
  const navigate = useNavigate()
  const domainKey = process.env.REACT_APP_API_BASE_URL
  useEffect(() => {
    axios.post(`${domainKey}/users/info`).then((res) => {
      console.log(res)
      setUser(res.data)
    })
  })
  const RegisterClick = () => {
    // navigate(-1)
    //포트폴리오 테이블 컬럼 확인
    axios.post(`${domainKey}/users/portfolio`).then(() => {
      alert("등록되었습니다!")
      navigate(-1)
    })
  }
  const inputstyle =
    "border border-b-gray-500 w-full px-2 py-1 rounded-lg shadow-lg"

  return (
    <section className="flex justify-center w-full flex-row">
      <div className="border border-black w-256 mx-96 h-auto p-16 my-16">
        <div className="flex">
          <div className="border border-black w-40 h-52 flex justify-center items-center ">
            <input type="file" id="profileimg" hidden></input>
            <label
              htmlFor="profileimg"
              className="bg-gray-300 p-2 rounded-xl transition ease-in-out delay-75 hover:bg-gray-400 cursor-pointer"
            >
              사진 업로드
            </label>
          </div>
          <div className="px-8">
            <p className="text-2xl m-2">홍길동</p>
            <div className="my-5">
              <span>전화번호</span>
              <span className="mx-8">010-xxxx-xxxx</span>
            </div>
            <div className="my-5">
              <span>이메일</span>
              <span className="mx-8">ssss@naver.com</span>
            </div>
            <div className="my-5">
              <span className="self-center">여자</span>
              <span className="mx-8">2002.03.01</span>
            </div>
            {/* <div className="px-8">
            <p className="text-2xl m-2">{user.username}</p>
            <div className="my-5">
              <span>전화번호</span>
              <span className="mx-8">{user.phonenumber}</span>
            </div>
            <div className="my-5">
              <span>이메일</span>
              <span className="mx-8">{user.email}</span>
            </div>
            <div className="my-5">
              <span className="self-center">{user.gender}</span>
              <span className="mx-8">{user.birth}</span>
            </div> */}
          </div>
        </div>
        <div className="my-8">
          <p className="font-bold text-xl">공모전 참여</p>
          <div className="border border-black py-2 px-12">
            <div className=" my-6">
              <span className="">
                <input
                  type="text"
                  placeholder="공모전 제목"
                  className="border border-b-gray-500 w-96 px-2 py-1 rounded-lg shadow-lg"
                  onChange={(e) => {
                    setContestTitle(e.target.value)
                  }}
                ></input>
              </span>
              <span>관련 파일</span>
            </div>
            <span>
              <input
                type="date"
                className="border border-b-gray-500 w-96 px-2 py-1 rounded-lg shadow-lg"
              ></input>
            </span>
            <span>
              <span className="">
                <div className="border border-b-gray-500 w-96 px-2 py-1 rounded-lg shadow-lg"></div>
                <label htmlFor="portfoliofile">
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    style={{ color: "#000000" }}
                  />
                </label>
              </span>
              <input
                id="portfoliofile"
                type="file"
                hidden
                onChange={(e) => setFile(e.target.files?.[0])}
              ></input>
            </span>
            <div className="my-6">
              <textarea
                placeholder="참여 내용"
                className="w-full rounded-lg border border-b-black focus:border-none resize-none px-2 py-1 h-96 shadow-lg"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="my-6">
            <p className="font-bold text-xl">자기소개서</p>
            <div className="border border-black py-2 px-12">
              <div className="my-6">
                <input
                  className={inputstyle}
                  type="text"
                  placeholder="제목"
                  onChange={(e) =>
                    setIntroduction({ ...introduction, title: e.target.value })
                  }
                ></input>
              </div>
              <div className="my-6">
                <textarea
                  className="w-full rounded-lg border border-b-black focus:border-none resize-none px-2 py-1 h-96 shadow-lg"
                  placeholder="내용"
                  onChange={(e) =>
                    setIntroduction({
                      ...introduction,
                      content: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <input
            type="button"
            className="bg-black text-white font-bold px-4 w-32 py-2 rounded-lg"
            onClick={RegisterClick}
            value="등록하기"
          ></input>
        </div>
      </div>
    </section>
  )
}
export default Register_Portfolio
