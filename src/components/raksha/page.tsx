'use client';
import React from 'react'
import Title from '../atom/databayt'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from "@iconify/react";


const Raksha = () => {
    return (
        <div className='px-7 pt-28'>

            <Title title='Raksha' description='converting' />

            <p className="text-[18px] font-light tracking-wider  pb-7">
                Raksha is dedicated to converting gasoline-powered tuk-tuks into electric vehicles, <br /> to <strong>contribute</strong>, you may track the ongoing development by reviewing the Readme,
                Code, Design and Discussion respectively 👇.
            </p>
            <div className="flex gap-6  items-center">
                <Link href="/raksha/readme">
                    <Image
                        src="/contribute/readme.png"
                        alt="Readme"
                        width={65}
                        height={65}
                        className='reveal-less'
                    />
                </Link>
                <Link href="/raksha/docs">
                <Icon icon="ph:book-fill" width={70} color='black' className='reveal-less' />
                </Link>
                <Link href="/raksha/readme">
                <Icon icon="ion:trail-sign" width={70} color='black' className='reveal-less' />
                </Link>
                <Link href="/raksha/readme">
                <Icon icon="fluent:task-list-square-24-filled" width={70} color='black' className='reveal-less' />
                </Link>
                <Link href="/raksha/readme">
                <Icon icon="bitcoin-icons:message-filled" width={100} color='black' className='reveal-less' />
                </Link>
                
                <Link href="https://github.com/abdout/nmbd">
                    <Image
                        src="/contribute/github.png"
                        alt="Github"
                        width={65}
                        height={65}
                        className='reveal-less'
                    />
                </Link>
                <Link href="https://www.figma.com/design/lNRkXcxd6EWe09goW2IMcn/nmbd?node-id=21-6&t=C9lVZynpKdkcNKZH-0">
                    <Image
                        src="/contribute/figma.png"
                        alt="Figma"
                        width={65}
                        height={65}
                        className='reveal-less'
                    />
                </Link>   
            </div>
        </div >
    )
}

export default Raksha