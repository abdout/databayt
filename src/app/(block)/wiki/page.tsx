import GithubButton from '@/components/atom/github-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Wiki = () => {
    return (
        <>
            <GithubButton url="https://github.com/abdout/auth" />
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="space-y-4 text-center">
                    <h1 className="text-5xl font-bold"> 🪶 Wiki </h1>
                    <p className=" text-lg font-light">
                        A real time collaborative editing block.
                    </p>
                    <div className="flex items-center justify-center space-x-6 pt-4">
                        <Link href="/login">
                            <Button className="w-24 h-11 px-4 py-2 text-[16px] bg-black text-[#fcfcfc]">Edit</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wiki