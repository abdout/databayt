'use client';
import Databayt from '@/components/atom/databayt'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react";

const Contribute = () => {
  return (
    <div className='flex flex-col   justify-center h-screen overflow-hidden' dir='ltr'>
      <div className='flex flex-col items-start justify-start -mt-10'>
        <Databayt title='NMBD' description='Contributors' />
        <p className="text-[18px] font-light tracking-wider pl-1 pb-4 ">
          To <strong>contribute</strong>, you may track the ongoing development by<br/>reviewing the Readme,
          Code, Design and Discussion respectively 👇.
        </p>
        <div className="flex gap-6 items-start">
          <Link href="/readme">
          <Image
            src="/contribute/readme.png"
            alt="Readme"
            width={70}
            height={70}
            className='reveal-less'
          />
          </Link>
         <Link href="https://github.com/abdout/nmbd">
         <Image
            src="/contribute/github.png"
            alt="Github"
            width={70}
            height={70}
            className='reveal-less'
          />
          </Link>
          <Link href="https://www.figma.com/design/lNRkXcxd6EWe09goW2IMcn/nmbd?node-id=21-6&t=C9lVZynpKdkcNKZH-0">
          <Icon
            icon="file-icons:figma"
            
            width={60}
            height={60}
            className='reveal-less mt-1'
          />
          </Link>
          <Link href="/readme">
          <Image
            src="/contribute/discord.png"
            alt="Discord"
            width={70}
            height={70}
            className='reveal-less'
          />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contribute