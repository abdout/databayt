
import { useModal } from "@/provider/modal";
import React from 'react'


const Add = () => {
  const { openModal } = useModal();

  return (
    <div>
        <button
        className="p-4 border m-2 w-60 flex flex-col items-center justify-center hover:border-black opacity-70 hover:opacity-100"
        onClick={() => openModal("")}
      >
        add
      </button>
    </div>
  )
}

export default Add