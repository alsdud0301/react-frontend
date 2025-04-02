import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface portfolio {
  id: number
  title: string
}
const ApplyMethod = () => {
  //포트폴리오 지원방식 선택
  const radiosRef = useRef(null)
  const [file, setFile] = useState<File | null>(null)
  const [filename, setFilename] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)
  const portfolioRef = useRef<HTMLInputElement | null>(null)
  const [portfolio, setPortfolio] = useState<portfolio[]>([])
  const [presignedurl, setPresignedurl] = useState<string | null>(null)

  const navigate = useNavigate()
  const domainKey = process.env.REACT_APP_API_BASE_URL
  const getPortfolio = () => {
    axios
      .get(`${domainKey}/users/portfoliolist`, {})
      .then((res) => {
        console.log(res)
        setPortfolio(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getPortfolio()
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null
    if (selectedFile) {
      setFile(selectedFile)
      setFilename(selectedFile.name)
      // setFileError("")
    } else {
      setFile(null)
      setFilename(null)
    }
  }
  const selectMethod = () => {
    // if (portfolio != null) {
    // }
    if (portfolioRef.current != null) {
      portfolioRef.current.style.setProperty(
        "box-shadow",
        "lightblue 1px 1px 10px"
      )
      console.log("테스트")
    }
  }
  const portfolioSubmit = async () => {
    if (file) {
      //포트롤리오 번호 or 포트폴리오 파일 추가하기
      await axios
        .post(
          `${domainKey}/presigned-url`,
          {
            filename: file.name,
            contentType: file.type,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setPresignedurl(res.data)
        })
      if (presignedurl) {
        await axios
          .put(presignedurl, file, {
            headers: {
              "Content-Type": file.type,
            },
          })
          .then(() => {
            alert("지원완료!")
          })
      }
    }
  }

  return (
    <section className="w-full flex justify-center h-[85vh] items-center">
      <div className="shadow-gray-300 shadow-md w-auto justify-center p-12 flex m-auto ">
        <div className=" w-256 ">
          <div className="my-4">
            <p className="font-bold text-2xl">포트폴리오</p>
          </div>

          <div className="flex gap-4">
            {portfolio.map((content) => (
              <div className="">
                <Link to={`/portfoliodetail/${content.id}`}>
                  <p className="text-base font-semibold border-[1px] shadow-md w-80 h-48 rounded-lg p-10 flex justify-center items-center">
                    {content.title}
                  </p>
                </Link>
              </div>
            ))}
            <div className="">
              <Link to="/writeportfolio">
                <p className="text-base font-semibold border-[1px] shadow-md w-80 h-48 rounded-lg p-10 flex justify-center items-center">
                  포트폴리오 작성{" "}
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    size="2xl"
                    style={{ color: "#000000" }}
                    className="mx-3"
                  />
                </p>
              </Link>
            </div>
          </div>
          <div className="w-auto my-8 relative">
            <div className="w-auto my-8 relative">
              <div className="mb-4">
                <p className="font-bold text-2xl">포트폴리오 파일</p>
              </div>
              <div className="w-256 border border-gray-400 h-8 shadow-md flex items-center relative px-2">
                <span className="flex-grow overflow-hidden whitespace-nowrap text-gray-700">
                  {filename ? filename : "파일을 선택해주세요."}
                </span>
                <input
                  type="file"
                  ref={fileRef}
                  onChange={handleFileChange}
                  hidden
                  id="portfoliofile"
                />
                <label
                  htmlFor="portfoliofile"
                  className="bg-black absolute text-white w-24 h-8 flex justify-center items-center right-0 top-0 cursor-pointer"
                >
                  파일등록
                </label>
              </div>
            </div>
            {/* {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>} */}
          </div>
          <div className="w-256 flex justify-end">
            <input
              type="button"
              onClick={portfolioSubmit}
              value="제출하기"
              className="bg-black text-white font-bold w-32 h-10 rounded-md"
            ></input>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ApplyMethod
