import Image from 'next/image'
import React from 'react'

const Contributors = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-10 md:scale-110  rounded-full'>
        <div className='flex gap-4 items-center'>
        <Image src="/contributors/abdout.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/sedon.png" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/1.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/elliot.png" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/2.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/mazin.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/abdout.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/sedon.png" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/1.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/abdout.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/sedon.png" alt="" width={70} height={70} className='rounded-full' />
        </div>
        <div className='flex gap-4 items-center'>
        <Image src="/contributors/abdout.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/sedon.png" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/1.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/elliot.png" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/2.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/mazin.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/abdout.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/abdout.jpg" alt="" width={70} height={70} className='rounded-full' />
        <Image src="/contributors/sedon.png" alt="" width={70} height={70} className='rounded-full' />
        </div>
    </div>
  )
}

export default Contributors