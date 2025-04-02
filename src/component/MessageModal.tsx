import Modal from "react-modal"
import React, { useState } from "react"

type MessageModalProps = {
  isOpen: boolean
  onClose: () => void
}

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose }) => {
  const customModalStyle: ReactModal.Styles = {
    overlay: {
      display: "flex",
      justifyContent: "center",
    },
    content: {
      width: "50%",
      boxShadow: "0 0 10px 0 lightgray",
    },
  }
  return (
    <div onClick={(e) => e.stopPropagation()} className="">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
        style={customModalStyle}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={false}
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl shadow-lg"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      >
        <div className="">
          <div className="p-2">
            <p className="font-bold">ㅇㅇㅇ님에게 쪽지보내기</p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border-gray-400 border-[1px] overflow-auto"
              placeholder="쪽지 제목 입력"
            ></input>
          </div>
          <div className="mb-4">
            <textarea
              placeholder="쪽지 내용 입력"
              className="w-full p-2 border-gray-400 border-[1px] resize-none h-72"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <input
              type="button"
              value="쪽지보내기"
              className="rounded-xl bg-black text-white font-bold px-4 py-2 cursor-pointer"
            ></input>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default MessageModal
