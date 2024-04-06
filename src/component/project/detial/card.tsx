import React from 'react'
import MdIcon from '@/component/atom/icon/md'
import { Icon } from "@iconify/react";

const Card = (props:{
    head?: string,
    photo: string,
    name: string,
    rank: string,
    hours: string,
    phone: string, 
    email: string,  
}) => {
  return (
    <div style={{ transform: 'scale(0.8)' }}>
      <div className='flex flex-col'>
          <h2 className="py-2">{props.head}</h2>
          <div className="flex gap-[14px] mb-2">
              <div className="border rounded-full inline-block">
                  <MdIcon src={props.photo} alt="" path="" />
              </div>
              <div>
                  <h3>{props.name}</h3>
                  <h4>{props.rank}</h4>
              </div>
          </div>
          <div className="space-y-2">
              <div className="flex gap-4 ml-[12px]">
              <Icon icon={"lets-icons:time-light"} height="24" />
              <h4>{props.hours}</h4>
              </div>
              <div className="flex gap-4 ml-[12px]">
              <Icon icon={"ph:phone-call-thin"} height="24" />
              <h4>{props.phone}</h4>
              </div>
              <div className="flex gap-4 ml-[12px]">
              <Icon icon={"circum:mail"} height="24" />
              <h4>{props.email}</h4>
              </div>

          </div>
      </div>
    </div>
  )
}

export default Card