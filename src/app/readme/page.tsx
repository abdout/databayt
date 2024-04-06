import Image from 'next/image'
import React from 'react'

const Readme = () => {
  return (
    <div className='flex justify-center items-center p-8'>
        
        <Image
          src="/readme.png"
          width={1000}
          height={1000}
          alt="Readme"
        />
    </div>
  )
}

export default Readme