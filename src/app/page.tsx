import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Title from "@/components/atom/title";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import GithubButton from "@/components/atom/github-button";
import BlockButton from "@/components/atom/block-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <>
    <GithubButton url="https://github.com/abdout/databayt" />
    <div className="flex flex-col justify-center px-48 h-screen">
      <Title title="Databayt" description="🧱 Building blocks" />
        <p className=" text-xl font-light tracking-wide py-4">
          Automate the boring, elevate the wondrous. 
        </p>
        <Separator className="w-80" />
        
        <div className="fex space-x-4 pt-8 ">
          <BlockButton url="/atom" label="Atom" />
          <BlockButton url="/auth" label="Auth" />
          <BlockButton url="/wiki" label="Wiki" />
          <BlockButton url="/x" label="X" />
          <BlockButton url="/flow" label="Flow"  />
          <BlockButton url="/sera" label="Sera" disabled />
          <BlockButton url="/fix" label="Fix" disabled/>
          <BlockButton url="/vote" label="Vote" disabled />
        </div>
    </div>
    </>
  )
}
