import Image from 'next/image'
import React from 'react'
import { Icon } from "@iconify/react";
import StaticMap from '@/components/map/try';
import Link from 'next/link';

const MobileOffice = () => {
    return (
        <div className='flex flex-col w-full space-y-6'>
            <div className='flex gap-2 items-center pr-1'>
                <Icon icon='fluent:location-48-regular' width={16} />
                <h6 className='justify-start'>دار الحركة</h6>
            </div>
            <div className='flex flex-col gap-6 items-center scroll'>
                <Link href='https://www.google.com/maps/place/%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%A8%D9%86%D8%A7%D8%A1+%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9%E2%80%AD/@15.5723621,32.5455249,16z/data=!4m6!3m5!1s0x168e91065fdbb69f:0x20336b57e1831a16!8m2!3d15.5723414!4d32.5455571!16s%2Fg%2F11rcgr9ywr?authuser=0&entry=ttu'
                className=''>
                <Image src='/map.png' alt='' width={500} height={400} className='' />
                </Link>
                <div className='flex flex-col gap-1'>
                    
                    <strong>العمارات - شارع 35</strong>
                    <p> 0917150001 - info@nmbd.org</p>
                    <p> كل الأسبوع من 4 إلى 10 مساء</p>
    
                </div>
            </div>
        </div>
        
    )
}

const DesktopOffice = () => {
    return (
        <div className='flex flex-col w-full space-y-6'>
            <div className='flex gap-2 items-center pr-1'>
                <Icon icon='fluent:location-48-regular' width={20} />
                <h5 className='justify-start'>دار الحركة</h5>
            </div>
            <div className='flex gap-14 items-center justify-center scroll'>
                <Link href='https://www.google.com/maps/place/%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%A8%D9%86%D8%A7%D8%A1+%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9%E2%80%AD/@15.5723621,32.5455249,16z/data=!4m6!3m5!1s0x168e91065fdbb69f:0x20336b57e1831a16!8m2!3d15.5723414!4d32.5455571!16s%2Fg%2F11rcgr9ywr?authuser=0&entry=ttu'
                className=''>
                <Image src='/map.png' alt='' width={500} height={400} className='' />
                </Link>
                <div className='flex flex-col gap-3'>
                    <h5>العمارات - شارع 35</h5>
                    <h5>الخرطوم - السودان</h5>
                    <h5> 0917150001</h5>
                    <h5>info@nmbd.org</h5>
                    <p>ساعات العمل: كل الأسبوع من 4 إلى 10 مساء</p>
                    <p>وقت الذروة: أيام الخميس والجمعة في حدود الساعة 7 مساء</p>
                </div>
            </div>
        </div>
        
    )
}
const Office = () => {
    return (
        <div>
      <div className="block md:hidden">
        <MobileOffice />
      </div>
      <div className="hidden md:block">
        <DesktopOffice />
      </div>
    </div>
    )
}

export default Office