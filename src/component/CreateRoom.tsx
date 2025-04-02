import React, { useContext, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { LoginContext } from "../context/LoginContext"
import axios from "axios"
const CreateRoom = () => {
  // 방생성
  const [contestTitle, setContestTitle] = useState("")
  const [file, setFile] = useState<File | null>()
  const [filename, setFileName] = useState([])
  const [entryfee, setEntryfee] = useState("")
  const [qualification, setQualification] = useState("")
  const [content, setContent] = useState("")
  const fileRef = useRef<HTMLInputElement>(null)
  const [presignedurl, setPresignedurl] = useState<string | null>(null)
  const reactquilchange = (
    content: any,
    delta: any,
    source: any,
    editor: any
  ) => {
    setContent(content)
  }

  const createroom = () => {
    const formData = new FormData()

    formData.append("contestTitle", contestTitle)
    if (file) {
      formData.append("file", file)

      // if (fileRef.current && fileRef.current.files) {
      //   Array.from(fileRef.current.files).forEach((file, index) => {
      //     formData.append(`filename_${index}`, file) // 파일 이름 구분 가능하게 키 지정
      //   })
      // }

      formData.append("entryfee", entryfee)
      formData.append("qualification", qualification)
      formData.append("content", content)
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/creatcontest`, formData)
        .then((res) => {
          setPresignedurl(res.data)
        })
        .catch((err) => {
          console.log(err)
          alert("글작성 실패")
        })
      if (presignedurl) {
        axios.put(presignedurl, file, {
          headers: {
            "Content-Type": file.type,
          },
        })
      }
    }
  }
  return (
    <>
      <nav className="mx-auto w-auto flex flex-col h-auto items-center mt-[4rem] ">
        <div className="shadow  border-boxshadow-text-shadow-lg w-auto">
          <input
            type="text"
            placeholder="공모전 제목"
            name="contestTitle"
            className="w-[65rem] h-[2rem] p-[3rem] text-[20px] font-bold"
            onChange={(e) => setContestTitle(e.target.value)}
          ></input>
        </div>
      </nav>
      <section className="flex flex-col h-auto  items-center w-auto mx-auto  ">
        <div className="grid justify-center  shadow box-shadow-color-black w-[65rem] h-[24rem] mb-2">
          <label className="font-bold text-[20px] content-center">
            사진 추가
          </label>
          <label className="" htmlFor="fileid">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="w-[80px] h-[80px]"
            />
          </label>
          <input type="file" className="hidden" id="fileid" multiple />
        </div>
        <div className=" shadow box-shadow-color-black flex w-[65rem] h-auto border-[1px] ">
          <ul className="text-[1.3rem] p-[3rem] font-bold">
            <li className="h-[3rem] outline-none">지원 기간</li>
            <li className="h-[3rem] outline-none">전시 기간</li>
            <li className="h-[4rem] flex content-center flex-wrap justify-center">
              참가비
            </li>
            <li className=" h-[5rem] flex content-center flex-wrap mb-4">
              지원 자격
            </li>
            <li className="flex content-center">전시 내용</li>
          </ul>
          <ul className="text-[1.3rem] p-[3rem]">
            <li className="h-[3rem]">
              <input type="date"></input>
            </li>
            <li className="h-[3rem]">
              <input type="date"></input>
            </li>
            <li className="mb-4">
              <input
                type="text"
                className="w-[47rem] p-[1rem] shadow box-shadow-color-black outline-none "
                placeholder="참가비 입력"
                onChange={(e) => setEntryfee(e.target.value)}
              ></input>
            </li>
            <li className="mb-4">
              <textarea
                className="w-[47rem] p-[1rem] placeholder:text-xl shadow box-shadow-color-black resize-none outline-none"
                placeholder="지원 자격 입력"
                onChange={(e) => setQualification(e.target.value)}
              ></textarea>
            </li>
            <li className="mb-4">
              <ReactQuill
                className="h-[30rem] w-[47rem]"
                onChange={reactquilchange}
              ></ReactQuill>
            </li>
          </ul>
        </div>
      </section>
      <footer className="w-auto mt-6">
        <hr className="w-[100%] border-[1px solid]" />
        <div className=" flex justify-center mt-6 mb-8">
          <div className="w-[65rem] justify-end flex">
            <button
              onClick={createroom}
              className="bg-black text-[18px]  shadow box-shadow-color-black text-white font-bold w-[10rem] h-[4rem] cursor-pointer rounded-lg"
            >
              방 생성하기
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default CreateRoom
