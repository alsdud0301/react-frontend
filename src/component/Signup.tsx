import axios from "axios"
import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  validatePassword,
  validateEmail,
  validateId,
  validateName,
  ConfirmPassword,
  genderLabel,
} from "./ts/util"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"
const Signup = () => {
  const [activeTab, setActiveTab] = useState<string>("author")
  //공통
  const [name, setName] = useState<string>("")
  const [userid, setUserid] = useState<string>("")
  const [userpw, setUserpw] = useState<string>("")
  const [confirmPw, setConfirmPw] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [birth, setBirth] = useState<string>("")
  const [phonenumber, setPhonenumber] = useState<string>("")

  //에러메세지
  const [nameerror, setNameError] = useState<string>("")
  const [pwCheckError, setPwCheckError] = useState<string | null>(null)
  const [pwError, setPwError] = useState<string | null>(null)
  const [idError, setIdError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [genderError, setGenderError] = useState<string | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  //작가
  const [gender, setGender] = useState<string>("")
  const [vertification, setVertification] = useState<string>("")
  //갤러리 & 큐레이터
  const [filename, setFilename] = useState<string | null>("")
  const [file, setFile] = useState<File | null>(null)
  const [link, setLink] = useState<string>("")

  const maleLabelRef = useRef<HTMLLabelElement>(null)
  const femaleLabelRef = useRef<HTMLLabelElement>(null)
  const genderRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const checkName = () => setNameError(validateName(name))
  const checkId = () => setIdError(validateId(userid))
  const checkEmail = () => setEmailError(validateEmail(email))
  const checkPassword = () => setPwError(validatePassword(userpw))
  const confirmPassword = () =>
    setPwCheckError(ConfirmPassword(userpw, confirmPw))
  const genderClick = (gender: string) =>
    setGenderError(genderLabel(maleLabelRef, femaleLabelRef, gender))
  // const genderValue = (gender: string) => genderValue(gender)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null
    if (selectedFile) {
      setFile(selectedFile)
      setFilename(selectedFile.name)
      setFileError("")
    } else {
      setFile(null)
      setFilename(null)
    }
  }

  const [presignedurl, setPresignedurl] = useState<string | null>("")
  const signupClick = () => {
    const domainKey = process.env.REACT_APP_API_BASE_URL
    if (genderRef.current === null) {
      setGenderError("성별을 선택해주세요")
    }
    switch (activeTab) {
      case "author":
        axios
          .post(`${domainKey}/users/signup`, {
            name: name,
            userid: userid,
            userpw: userpw,
            email: email,
            gender: gender,
            phonenumber: phonenumber,
          })
          .then((response) => {
            alert("회원가입 성공!")
            if (response.status === 200) {
              return navigate(`/login`)
            }
          })
          .catch((err) => {
            console.log(err)
          })
        break
      case "curator":
        const formdata = new FormData()
        if (file) {
          formdata.append("file", file)
          formdata.append("type", file.type)

          formdata.append("username", name)
          formdata.append("userid", userid)
          formdata.append("userpw", userpw)
          formdata.append("email", email)
          formdata.append("gender", gender)
          formdata.append("birth", birth)
          formdata.append("phonenumber", phonenumber)

          axios
            .post(`${domainKey}/users/signup`, formdata)
            .then((response) => {
              alert("회원가입 성공!")
              setPresignedurl(response.data)
              if (response.status === 200) {
                return navigate("/login")
              }
            })
            .catch((err) => {
              console.log(err)
            })
          if (presignedurl) {
            axios.put(presignedurl, file, {
              headers: {
                "Content-Type": file.type, // 파일의 실제 MIME 타입 지정
              },
            })
          }
        }
        break
      case "gallery":
        const formdata2 = new FormData()
        if (file) {
          formdata2.append("file", file)
          formdata2.append("type", file.type)

          formdata2.append("username", name)
          formdata2.append("userid", userid)
          formdata2.append("userpw", userpw)
          formdata2.append("email", email)
          formdata2.append("gender", gender)
          formdata2.append("birth", birth)
          formdata2.append("phonenumber", phonenumber)
          axios
            .post(`${domainKey}/users/signup`, formdata2)
            .then((response) => {
              alert("회원가입 성공!")
              setPresignedurl(response.data)
              if (response.status === 200) {
                return navigate("/login")
              }
            })
            .catch((err) => {
              console.log(err)
            })
          if (presignedurl) {
            axios.put(presignedurl, file, {
              headers: {
                "Content-Type": file.type, // 파일의 실제 MIME 타입 지정
              },
            })
          }
        }
    }
  }

  return (
    <section className="w-auto  flex mt-[4rem] justify-center">
      <div className="">
        <div className="w-[40rem]  mb-1">
          <p className="font-bold text-6xl text-shadow">
            <Link to="/">ROB</Link>
          </p>
        </div>
        <div className="flex">
          <div
            onClick={() => setActiveTab("author")}
            className=" justify-center grid border-lightgray border-2 rounded-tl-md py-[2%] w-[50%] h-[5%] hover:bg-black hover:text-white transition ease-in-out duration-150 cursor-pointer"
          >
            <p className="font-bold text-[1.5rem]">작가</p>
          </div>
          <div
            onClick={() => setActiveTab("curator")}
            className="justify-center grid border-lightgray border-2 rounded-tr-md py-[2%]  w-[50%]  hover:bg-black hover:text-white transition ease-in-out duration-150 cursor-pointer"
          >
            <p className="font-bold text-[1.5rem]">큐레이터</p>
          </div>
          <div
            onClick={() => setActiveTab("gallery")}
            className="justify-center grid border-lightgray border-2 rounded-tr-md py-[2%]  w-[50%]  hover:bg-black hover:text-white transition ease-in-out duration-150 cursor-pointer"
          >
            <p className="font-bold text-[1.5rem]">갤러리</p>
          </div>
        </div>
        {activeTab === "author" && (
          <div className="shadow box-shadow-color-black rounded-br-lg rounded-bl-lg px-[15%] py-[3%]">
            <ul>
              <li>
                <input
                  type="text"
                  className="w-[100%]  text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="이름"
                  onBlur={checkName}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              {nameerror && <li style={{ color: "red" }}>{nameerror}</li>}
              <li>
                <input
                  type="text"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="아이디"
                  onBlur={checkId}
                  onChange={(e) => setUserid(e.target.value)}
                ></input>
              </li>
              {idError && <li style={{ color: "red" }}>{idError}</li>}
              <li>
                <input
                  type="password"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="비밀번호"
                  onChange={(e) => setUserpw(e.target.value)}
                  onBlur={checkPassword}
                ></input>
              </li>
              {pwCheckError && <li style={{ color: "red" }}>{pwCheckError}</li>}
              <li>
                <input
                  type="password"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="비밀번호 확인"
                  onChange={(e) => setConfirmPw(e.target.value)}
                  onBlur={confirmPassword}
                ></input>
                {pwError && <li style={{ color: "red" }}>{pwError}</li>}
              </li>
              <li>
                <input
                  type="text"
                  className="w-[100%] text-lg  px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="이메일"
                  onBlur={checkEmail}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {emailError && <li style={{ color: "red" }}>{emailError}</li>}
              </li>
              {/* 성별 */}
              <li className="flex text-center">
                <input
                  type="radio"
                  id="male_radio"
                  className="hidden"
                  name="gender"
                  value="male"
                  onClick={() => genderClick("male")}
                  ref={genderRef}
                />
                <label
                  className="block w-[50%] text-lg shadow-lg rounded-md border border-gray-400 cursor-pointer text-center"
                  htmlFor="male_radio"
                  ref={maleLabelRef}
                >
                  남자
                </label>

                <input
                  type="radio"
                  id="female_radio"
                  className="hidden"
                  name="gender"
                  value="female"
                  onClick={() => genderClick("female")}
                  ref={genderRef}
                />
                <label
                  className="block w-[50%] text-lg shadow-lg rounded-md border border-gray-400 cursor-pointer text-center"
                  htmlFor="female_radio"
                  ref={femaleLabelRef}
                >
                  여자
                </label>
              </li>

              {genderError && <li style={{ color: "red" }}>{genderError}</li>}
            </ul>
            {/* 휴대폰 인증 */}

            <ul>
              <li>
                <input
                  type="date"
                  className="w-[100%] text-lg p-[2%] text-[20px] my-1 shadow-lg rounded-xl border border-gray-400"
                  onChange={(e) => setBirth(e.target.value)}
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  id="auth_number"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="휴대폰 번호"
                  onChange={(e) => setPhonenumber(e.target.value)}
                ></input>
              </li>
              <li className="w-[100%] relative ">
                <input
                  type="text"
                  className="w-[100%] text-lg  px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="인증번호"
                  onChange={(e) => setVertification(e.target.value)}
                ></input>
                <input
                  type="button"
                  className="absolute w-10 h-[70%] right-2 border-l-2 text-sm top-2 py-[0.1rem] px-2 font-bold border-gray-100 shadow-sm cursor-pointer "
                  value="인증"
                  // onClick={checkphone}
                ></input>
              </li>
              {phoneError && <li style={{ color: "red" }}>{phoneError}</li>}
              <li className="justify-center flex">
                <button
                  onClick={signupClick}
                  className="w-[80%] p-[2%] text-[20px] my-3 shadow-lg bg-black  text-white font-bold text-lg rounded-md"
                >
                  가입하기
                </button>
              </li>
            </ul>
          </div>
        )}
        {/* 큐레이터 회원가입 */}
        {activeTab === "curator" && (
          <div className="shadow box-shadow-color-black rounded-br-lg rounded-bl-lg px-[15%] py-[3%] ">
            <ul className="">
              <li>
                <input
                  type="text"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="이름"
                  onBlur={checkName}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              {nameerror && <li style={{ color: "red" }}>{nameerror}</li>}
              <li>
                <input
                  type="text"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="아이디"
                  onBlur={checkId}
                  onChange={(e) => setUserid(e.target.value)}
                ></input>
              </li>
              {idError && <li style={{ color: "red" }}>{idError}</li>}
              <li>
                <input
                  type="password"
                  id="pw"
                  className="w-[100%] text-lg px-3 py-1 text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="비밀번호"
                  onBlur={checkPassword}
                  onChange={(e) => setUserpw(e.target.value)}
                ></input>
              </li>
              {pwCheckError && <li style={{ color: "red" }}>{pwCheckError}</li>}
              <li>
                <input
                  type="password"
                  id="checkpw"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="비밀번호 확인"
                  onBlur={confirmPassword}
                  onChange={(e) => setConfirmPw(e.target.value)}
                ></input>
              </li>
              {pwError && <li style={{ color: "red" }}>{pwError}</li>}
              <li>
                <input
                  type="text"
                  className="w-[100%] text-lg  px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="이메일"
                  onBlur={checkEmail}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              {emailError && <li style={{ color: "red" }}>{emailError}</li>}
              <li className="flex text-center">
                <input
                  type="radio"
                  id="male_radio"
                  className="hidden"
                  name="gender"
                  value="male"
                  onClick={() => genderClick("male")}
                />
                <label
                  className="block w-[50%] text-lg shadow-lg rounded-md border border-gray-400 cursor-pointer text-center"
                  htmlFor="male_radio"
                  ref={maleLabelRef}
                >
                  남자
                </label>

                <input
                  type="radio"
                  id="female_radio"
                  className="hidden"
                  name="gender"
                  value="female"
                  onClick={() => genderClick("female")}
                />
                <label
                  className="block w-[50%] text-lg shadow-lg rounded-md border border-gray-400 cursor-pointer text-center"
                  htmlFor="female_radio"
                  ref={femaleLabelRef}
                >
                  여자
                </label>
              </li>

              {genderError && <li style={{ color: "red" }}>{genderError}</li>}
            </ul>

            {/* 휴대폰 인증 */}

            <ul>
              <li>
                <input
                  type="date"
                  className="w-[100%] text-lg p-[2%] text-[20px] my-1 shadow-lg rounded-xl border border-gray-400"
                  onChange={(e) => setBirth(e.target.value)}
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  id="auth_number"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="휴대폰 번호"
                  onChange={(e) => setPhonenumber(e.target.value)}
                ></input>
              </li>
              <li className="w-[100%] relative ">
                <input
                  type="text"
                  className="w-[100%] text-lg  px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="인증번호"
                  onChange={(e) => setVertification(e.target.value)}
                ></input>
                <input
                  type="button"
                  className="absolute w-10 h-[70%] right-2 border-l-2 text-sm top-2 py-[0.1rem] px-2 font-bold border-gray-100 shadow-sm cursor-pointer "
                  value="인증"
                ></input>
              </li>
            </ul>

            <ul>
              <li className="w-[448px] relative h-[100%]">
                <input
                  id="reg"
                  type="file"
                  className="w-[100%] h-0 "
                  onChange={handleFileChange}
                ></input>

                {filename ? (
                  <p className="w-[100%]  px-3 py-1  text-lg p-1 text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400">
                    {filename}
                  </p>
                ) : (
                  <p className="w-[100%]  px-3 py-1  text-lg p-1 text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400">
                    통장 사본
                  </p>
                )}

                <label
                  className="absolute text-lg  right-0 top-[2.2rem] border-gray-100 border-l-2 pl-3 pr-4 "
                  htmlFor="reg"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    className="cursor-pointer "
                    size="lg"
                  />
                </label>
              </li>
              <li className="justify-center flex">
                <button
                  onClick={signupClick}
                  className="w-[80%] p-[2%] text-[20px] my-3 shadow box-shadow-color-black bg-black text-white font-bold text-lg rounded-md"
                >
                  가입하기
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* 갤러리 회원가입 */}
        {activeTab === "gallery" && (
          <div className="shadow box-shadow-color-black rounded-br-lg rounded-bl-lg px-[15%] py-[3%] ">
            <ul className="">
              <li>
                <input
                  type="text"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="갤러리명"
                  onBlur={checkName}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              {nameerror && <li style={{ color: "red" }}>{nameerror}</li>}
              <li>
                <input
                  type="text"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="아이디"
                  onBlur={checkId}
                  onChange={(e) => setUserid(e.target.value)}
                ></input>
              </li>
              {idError && <li style={{ color: "red" }}>{idError}</li>}
              <li>
                <input
                  type="password"
                  id="pw"
                  className="w-[100%] text-lg px-3 py-1 text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="비밀번호"
                  onBlur={checkPassword}
                  onChange={(e) => setUserpw(e.target.value)}
                ></input>
              </li>
              {pwCheckError && <li style={{ color: "red" }}>{pwCheckError}</li>}
              <li>
                <input
                  type="password"
                  id="checkpw"
                  className="w-[100%] text-lg px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="비밀번호 확인"
                  onBlur={confirmPassword}
                  onChange={(e) => setConfirmPw(e.target.value)}
                ></input>
              </li>
              {pwError && <li style={{ color: "red" }}>{pwError}</li>}
              <li>
                <input
                  type="text"
                  className="w-[100%] text-lg  px-3 py-1  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                  placeholder="이메일"
                  onBlur={checkEmail}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              {emailError && <li style={{ color: "red" }}>{emailError}</li>}
            </ul>

            <ul>
              <li className="w-[448px] relative h-[100%]">
                <input
                  id="reg"
                  type="file"
                  className="w-[100%] h-0 "
                  onChange={handleFileChange}
                ></input>

                {filename ? (
                  <p className="w-[100%]  px-3 py-1  text-lg p-1 text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400">
                    {filename}
                  </p>
                ) : (
                  <p className="w-[100%]  px-3 py-1  text-lg p-1 text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400">
                    사업자 등록증
                  </p>
                )}

                <label
                  className="absolute text-lg  right-0 top-[2.2rem] border-gray-100 border-l-2 pl-3 pr-4 "
                  htmlFor="reg"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    className="cursor-pointer "
                    size="lg"
                  />
                </label>
              </li>

              <li>
                <input
                  type="text"
                  id=""
                  placeholder="갤러리 주소 ex)네이버 스마트플레이스 지도 링크"
                  onChange={(e) => setLink(e.target.value)}
                  className="w-[100%]  px-3 py-1  text-lg  text-[20px] my-1 text-shadow-x-10 shadow-lg rounded-xl border border-gray-400"
                />
              </li>

              <li className="justify-center flex">
                <button
                  onClick={signupClick}
                  className="w-[80%] p-[2%] text-[20px] my-3 shadow box-shadow-color-black bg-black text-white font-bold text-lg rounded-md"
                >
                  가입하기
                </button>
              </li>
            </ul>
          </div>
        )}
        {/* 로그인 아이디찾기 비번찾기 */}
        <div className="w-auto mt-2 justify-center flex text-gray-500 ">
          <Link to="/login">로그인</Link>
          <span className="font-bold mx-3">|</span>
          <Link to="/f_ID">아이디찾기</Link>
          <span className="font-bold  mx-3">|</span>
          <Link to="/f_PWD">비밀번호 찾기</Link>
        </div>
        <div id="gallery_div" className="hidden">
          <div className="bg-black w-[20rem] h-[10rem]"></div>
        </div>
      </div>
    </section>
  )
}

export default Signup
