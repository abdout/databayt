import React from 'react'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: '600',
  subsets: ['latin'],
});

const Title = (props: {
  title: string,
  description?: string
}) => {
  return (
    <div className='justify-start md:-ml-2 rubik'>
      <p className="text-[16px] sm:text-[18px] md:text-[24px] pl-[2px] md:pl-[6px] font-light tracking-wider">{props.description}</p>
      <div className={rubik.className}>
        <h1 className="word-animation -mt-2 md:-mt-4 font-medium text-[2rem] sm:text-[2.5rem] md:text-[5rem] lg:text-[6rem]">
          {props.title.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default Title
