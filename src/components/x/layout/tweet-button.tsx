'use client';
import { Icon } from "@iconify/react";
import React from 'react'

const SidebarTweetButton = () => {
    return (
        <div >
            <div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-10 cursor-pointer'>
            <Icon icon='carbon:tweet' width="28" />
             </div>
             <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-10 cursor-pointer transition">
                <p className="hidden lg:block text-center text-white text-[20px] font-semibold">
                    Tweet
                </p>

             </div>
        </div>
    )
}

export default SidebarTweetButton