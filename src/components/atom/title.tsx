import React from 'react'
import { Rubik } from 'next/font/google'


const rubik = Rubik({
  weight: '600',
  subsets: ['latin'],
});

const Title = (props: {
  title: string,
  description?: string
  icon?: string
}) => {
  return (
    <div className='justify-start md:-ml-2 rubik'>
      <div className={rubik.className}>
        <h1 className="word-animation text-6xl font-extrabold tracking-wide">
          {props.title.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default Title
