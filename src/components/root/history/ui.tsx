import Title from '@/components/atom/title'
import React from 'react'
import { Icon } from "@iconify/react";

const History = () => {
  return (
    <div>
        <Title icon='material-symbols-light:event-outline' placeholder='تاريخ الحركة' />
        <div className='flex flex-col items-center'>
        <p>يوليو 2024 - المشاركة في قوى الاجماع الوطني</p>   
        <p>يوليو 2024 - المشاركة في قوى الاجماع الوطني</p> 
        <p>يوليو 2024 - المشاركة في قوى الاجماع الوطني</p> 
        <div className='flex flex-col gap-2 items-center' >
            <Icon icon="material-symbols-light:event-outline" width={30} />
            <p>تأسست في 2018</p>
        </div>
        </div>
    </div>
  )
}

export default History