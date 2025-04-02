import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"

//메뉴바에서 포트폴리오 등록 누를 시 나오는 페이지
const Portfoliotype = () => {
  const [filename, setFilename] = useState<string | null>(null)
  const navigate = useNavigate()
  const createPortfolio = () => {
    navigate("/registerportfolio")
  }
  const FileValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFilename(e.target.files[0].name)
    }
  }
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/users/portfolio`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  const register = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/users/portfolio`, {
        portfolioFile: filename,
      })
      .then((response) => {
        alert("포트폴리오 등록 완료")
        if ((response.status = 200)) {
          return navigate("/portfoliotype")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <section className="">
      <div className="w-256  mx-auto mt-12">
        <p className="font-bold text-lg">포트폴리오</p>
      </div>
      <div className="flex w-256 mx-auto my-5">
        <div
          className="w-56 h-32 border border-gray-300 rounded-xl shadow cursor-pointer grid justify-center content-center "
          onClick={createPortfolio}
        >
          <p className="text-base font-semibold">
            포트폴리오 작성{" "}
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="2xl"
              style={{ color: "#000000" }}
            />
          </p>
        </div>
      </div>
      <div className="w-256  mx-auto mt-12">
        <p>포트폴리오 파일</p>
        <div className="">
          {filename ? (
            <p id="file_link" className="border ">
              {filename}
            </p>
          ) : (
            <p id="file_link" className="border ">
              hwp,pdf,word 형식 파일 업로드
            </p>
          )}

          <input
            type="file"
            hidden
            onChange={FileValue}
            name="portfolio"
            id="portfolio_file"
          />
          <label
            htmlFor="portfolio_file"
            className="bg-black text-white font-bold"
            onClick={register}
          >
            파일 등록
          </label>
        </div>
      </div>
    </section>
  )
}
export default Portfoliotype
