"use client";
import React from 'react'
import { Icon } from "@iconify/react";

const Title = (props:
    {
    icon:string
    placeholder: string
}) => {
    return (
        <div className='flex gap-2 items-center' >
            <Icon icon={props.icon} width={30} />
            <h4> {props.placeholder}</h4>
        </div>
    )
}

export default Title