import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Back = (props:{path:string}) => {
  return (
    <Link href={props.path}>
     <Image
    className='ml-4'
    src="/back.png"
    width={15}
    height={15}
    alt="Back"
     />
    </Link>
   
  )
}

export default Back