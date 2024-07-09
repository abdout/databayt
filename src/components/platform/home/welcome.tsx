'use client';
import React from 'react'
import { Icon } from "@iconify/react";

const Welcome = () => {
  return (
    <div className='pt-14'>
        <h1>مرحبا بيك</h1>
        <p className='text-xl font-light'>في منصة الحركة الوطنية للبناء والتنمية</p>
        
        <p className='w-4/5 pt-8'>لن يصيب المجد كف واحد - إيماناً بسحر العمل الجماعي، نسعى من خلال هذه المنصة إلى أتمتة أعمال الحركة  وامتلاك ادوات تنسيق وتعاون افضل. ساهم في خلق تجربة جديدة من الكفاءة والتنظيم.</p>
        <p className='pt-4'>
            استكشف الروابط أدناه للدليل المستخدم ومركز المساعدة على التوالي 👇                              
        </p>
        <div className='flex pt-4 gap-8 items-center'>
        <Icon icon={"ph:book-fill"} height="70" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"ant-design:customer-service-filled"} height="70" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        </div>
    </div>
  )
}

export default Welcome