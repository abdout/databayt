import React from 'react'

const XlButton = (props: {placeholder: string; weight?: number}) => {
  return (
    <button className='bg-yellow-400 w-full h-14 p-3 text-[{props.weight}px] font-semibold tracking-wider'>
        {props.placeholder}
    </button>
  )
}

export default XlButton