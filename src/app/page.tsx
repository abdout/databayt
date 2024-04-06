'use client';
import { LoginButton } from "@/component/auth/login-button";
import MdButton from "@/component/atom/button/md";
import MdIcon from "@/component/atom/icon/md";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between p-4">
      <div className="flex flex-col items-center justify-center flex-grow space-y-1 text-start">
        <h1 className="text-3xl">Databayt</h1>
        <Image className="pb-6" src='/pen.png' width={200} height={200} alt='Pen' />
        <LoginButton asChild>
          <MdButton placeholder="Get started" />
        </LoginButton>
      </div>
      <div className="flex flex-col items-center space-y-1 text-start pb-4">
        <p className="text-[14px] font-light tracking-wider pb-4">
          To <strong>contribute</strong>, you may track the ongoing development by reviewing the Design, Source
          Code, <br/>Discussion and Roadmap on Figma, GitHub, Discord, and
          Readme, respectively.
        </p>
        <div className="flex gap-6 items-center">
          <MdIcon
            src="/contribute/figma.png"
            alt="Figma"
            path="https://www.figma.com/file/pAkG4vBJ7t6iZfsvumbRMI/Databayt?type=design&node-id=0%3A1&mode=design&t=EN4ApP1h6DVPiNFA-1"
          />
          <MdIcon
            src="/contribute/github.png"
            alt="Github"
            path="https://github.com/abdout/beta"
          />
          <MdIcon
            src="/contribute/discord.png"
            alt="Discord"
            path="https://discord.gg/uPa4gGG62c"
          />
          <MdIcon
            src="/contribute/readme.png"
            alt="Readme"
            path="/readme"
          />
        </div>
      </div>
    </div>
  );
}