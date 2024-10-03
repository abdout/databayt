import GithubButton from '@/components/atom/github-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Flow = () => {
    return (
        <>
            <GithubButton url="https://github.com/abdout/auth" />
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="space-y-4 text-center">

                    <h1 className="text-5xl font-bold"> 🐝 Flow </h1>
                    <p className=" text-lg font-light">
                        Streamline processes and manage workflows.
                    </p>
                    <div className="flex items-center justify-center space-x-6 pt-4">
                        <Link href="/login">
                            <Button className="w-24 h-11 px-4 py-2 text-[16px] bg-black text-[#fcfcfc]">Explore</Button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </>
        // <div className="w-full h-[140px]  border border-gray p-5 hover:border-black opacity-80 hover:opacity-100 transition-opacity duration-200">
        //     <div className="flex gap-4 items-center">
        //     <div className="flex items-center justify-center w-[60px] h-[40px] bg-black ">
        //         <h1 className="text-white text-justify text-[16px] font-medium tracking-wide">FLOW</h1>
        //       </div>
        //       <div>
        //         <p className="whitespace-pre text-[16px] font-regular tracking-wide leading-5">
        //           من يقنع الطوفان الا يعبرا
        //         </p>
        //       </div>
        //     </div>
        //     <div className="whitespace-pre pt-2 racking-wide leading-5">
        //       <p className="text-[13.5px] font-extralight">
        //       Bring teams together, Build and manage\nany process, project or workflow.
        //       </p>
        //     </div>
        //   </div>
    )
}

export default Flow