// import Header from "@/components/x/header";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <Header label="Home" />
      
//     </div>
//   );
// }

import GithubButton from '@/components/atom/github-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const X = () => {
  return (
    <>
    <GithubButton url="https://github.com/abdout/auth" />
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="space-y-4 text-center">

        <h1 className="text-5xl font-bold"> 🐤 X </h1>
        <p className=" text-lg font-light">
          An interactive features, found in soical apps. 
        </p>
        <div className="flex items-center justify-center space-x-6 pt-4">
          <Link href="/login">
            <Button className=" h-11 px-8 py-2 text-[16px] bg-black text-[#fcfcfc]">Interact</Button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default X
