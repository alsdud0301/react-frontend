import React, { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import AuthorMypage from "./AuthorMypage"
import GalleryMypage from "./GalleryMypage"
import CuratorMypage from "./CuratorMypage"
const Mypage = () => {
  const { user } = useContext(LoginContext)
  if (user.usertype === "author") {
    return <AuthorMypage />
  } else if (user.usertype === "gallery") {
    return <GalleryMypage />
  } else {
    return <CuratorMypage />
  }
}
export default Mypage
