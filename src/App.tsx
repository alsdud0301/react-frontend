import React from "react"

import "./App.css"

import Main from "./component/Main"
import Menubar from "./component/Menubar"
import Login from "./component/Login"
import { Route, Routes, useLocation } from "react-router-dom"
import Signup from "./component/Signup"
import ContestList from "./component/ContestList"
import CreateRoom from "./component/CreateRoom"

import GalleryList from "./component/GalleryList"
import AuthorInfo from "./component/AuthorInfo"
import { AuthProvider } from "./context/LoginContext"
import ContestSub from "./component/ContestSub"
import SelectDate from "./component/SelectDate"
import Portfoliotype from "./component/PortfolioType"
import RegisterPortfolio from "./component/RegisterPortfolio"

import ApplyMethod from "./component/ApplyMethod"
import Profile from "./component/Profile"

import ApplyList from "./component/ApplyList"
import PortfolioDetail from "./component/PortfolioDetail"
import Mypage from "./component/Mypage"

function App() {
  const location = useLocation()

  // 메뉴바를 숨길 경로 설정 (로그인, 회원가입 경로)
  const hideMenuBar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/signup_gallery" ||
    location.pathname === "/signup_curator"

  return (
    <>
      <AuthProvider>
        {!hideMenuBar && <Menubar />}

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/gallerylist" element={<GalleryList />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contestsub/:id" element={<ContestSub />}></Route>
          <Route path="/contestsub" element={<ContestSub />}></Route>
          <Route path="/selectdate" element={<SelectDate />}></Route>
          <Route path="/portfoliotype" element={<Portfoliotype />}></Route>
          <Route
            path="/registerportfolio"
            element={<RegisterPortfolio />}
          ></Route>
          <Route path="/contestlist" element={<ContestList />}></Route>
          <Route path="/createroom" element={<CreateRoom />}></Route>
          <Route path="/authorInfo" element={<AuthorInfo />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>

          <Route path="/applymethod" element={<ApplyMethod />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/gallerydetail" element={<Profile />}></Route>
          <Route path="/applylist" element={<ApplyList />}></Route>
          <Route path="/portfoliodetail" element={<PortfolioDetail />}></Route>
          <Route
            path="/portfoliodetail/:id"
            element={<PortfolioDetail />}
          ></Route>
          <Route path="/writeportfolio" element={<RegisterPortfolio />}></Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
