'use client';
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from 'react'

interface HeaderProps {
    label: string;
    showActArrow?: boolean;
}
const Header: React.FC<HeaderProps> = ({ label, showActArrow }) => {

    return (
        <div className='border-b-[1px] border-slate-400 p-5'>
            <div className='flex flex-row items-center gap-2'>
                {showActArrow && (
                   
                        <Icon onClick={() => { }} icon='carbon:chevron-left' width="20" className="cursor-pointer hover:opacity-10 transition"/>
                  

                )}
                <h1 className="text-white text-xl font-semibold">
                    {label}
                </h1>

            </div>

        </div>
    )
}

export default Header