import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Title from "@/components/atom/title";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="space-y-4 text-center">

        <h1 className="text-5xl font-bold"> 🔐 Auth </h1>
        <p className=" text-lg font-light">
          A reusable authentication and authorization block. 
        </p>
        <div className="flex items-center justify-center space-x-6 pt-4">
          <Link href="/login">
            <Button className="w-24 h-11 px-4 py-2 text-[16px] bg-black text-[#fcfcfc]">Login</Button>
          </Link>
          <Link href="/join">
            <Button className="w-24 h-11 border text-[16px] border-black text-black hover:bg-gray-100 bg-[#fcfcfc]">Join</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
