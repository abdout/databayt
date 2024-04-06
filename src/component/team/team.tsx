'use client';
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useModal } from "@/provider/modal";

const Team = (props: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  status?: number;
  id?: string;
  bg?: string;
}) => {
  const { openModal } = useModal();
  return (
    <div className="flex gap-4 justify-center items-center">
      
        <Image
          className="rounded-full border cursor-pointer"
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.width}
          onClick={() => props.id && openModal(props.id)}
        />
      
      <div className="flex flex-col items-start justify-start">
        <h3>{props.alt}</h3>
        <h4>Updated</h4>
        <h4>In RTCC</h4>
        <div className="flex gap-2">
        <Icon icon="mdi-light:message-reply" width={25}/>
        <Icon icon="circum:mail" width={25}/>
        <Icon icon="ph:phone-call-thin" width={25}/>
        </div>
      </div>
    </div>
  );
};

export default Team;