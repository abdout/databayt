import React from 'react'
import { Icon } from "@iconify/react";

const TextIcon = (props:{
    label: string,
    icon: string,
    color?: 'red' | 'yellow' | 'black';

}) => {
  return (
    <div className='flex flex-col space-y-2 items-center justify-center'>
        <Icon icon={props.icon} width={50}/>
        <h4 className={'text-${color}-400'}>{props.label}</h4>
    </div>
  )
}

export default TextIcon