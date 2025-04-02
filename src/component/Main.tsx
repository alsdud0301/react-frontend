import React, { useContext, useEffect, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import axios from "axios"

const Main = () => {
  useEffect(() => {}, [])
  axios
    .get(`/GallryList`, {})
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
      }
    })
    .catch((err) => {
      console.log(err)
    })
  return (
    <>
      <section className="h-auto mt-3 w-[100%]">
        <div className="">
          <div className="flex justify-center">
            {/* <img
              className="w-[70%] h-[800px]"
              src="../winter.jpg"
              alt="logo"
            ></img> */}
            <img className="w-[100%] h-200" src="../img.jpg" alt="logo"></img>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-auto h-auto mt-4">
        <div className="border-[1px] shadow box-text-shadow-lg w-[25rem] h-[35rem] text-center mx-6">
          <p className="font-bold">이달의 작가</p>
        </div>
        <div className="border-[1px] shadow box-text-shadow-lg w-[25rem] h-[35rem] text-center mx-6">
          <p className="font-bold">공모전 방</p>
        </div>
        <div className="border-[1px] shadow box-text-shadow-lg w-[25rem] h-[35rem] text-center mx-6">
          <p className="font-bold">이달의 갤러리</p>
        </div>
      </section>
      <section className=" mt-12 w-auto h-auto flex justify-center">
        <div className="w-[81rem] border-[1px] shadow box-text-shadow-lg">
          <p className="font-bold  p-[2rem] h-[20rem]">예술계 소식</p>
        </div>
      </section>
      <section className="font-bold grid justify-center mt-[5rem] ">
        <p className="">이번주 인기 있는 갤러리 방</p>
        <div className="flex flex-wrap ">
          <div className="shadow border-boxshadow-text-shadow-lg w-[15rem] h-[10rem] mr-6"></div>
          <div className="shadow border-boxshadow-text-shadow-lg w-[15rem] h-[10rem] mr-6"></div>
          <div className=" shadow border-boxshadow-text-shadow-lg w-[15rem] h-[10rem] mr-6 "></div>
          <div className="shadow border-boxshadow-text-shadow-lg w-[15rem] h-[10rem] mr-6 "></div>
          <div className="shadow border-boxshadow-text-shadow-lg w-[15rem] h-[10rem] "></div>
        </div>

        <p className="">마감 앞둔 갤러리 방</p>
        <div className="">
          <div className=" "></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </section>
      <footer className=""></footer>
    </>
  )
}

export default Main
