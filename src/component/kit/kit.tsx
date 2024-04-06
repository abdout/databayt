import React from "react";
import Image from "next/image";
import { useModal } from "@/provider/modal";

const Kit = (props: {
  src: string;
  alt: string;
  width?: number;
  status?: number;
  id?: string;
  bg?: string;
}) => {
  const { openModal } = useModal();
  return (
    <div 
    onClick={() => props.id && openModal(props.id)}
    className="flex flex-col border w-[180px] hover:border-black">
      <div className="flex justify-center items-center h-[140px] p-2">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.width}
        />
      </div>
      <div style={{ backgroundColor: props.bg }} className="px-4 py-2">
        <h3>{props.alt}</h3>
        <h4>{props.id}</h4>
        <h4>Ready</h4>
        <h4>In store</h4>
      </div>
    </div>
  );
};

export default Kit;