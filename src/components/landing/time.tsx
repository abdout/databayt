import React from 'react'
import Clock from './clock'

const Time = () => {
    return (
        <div className='flex justify-between items-center px-28 md:px-32 lg:px-48 bg-black text-background -mx-20'>
        <div className='flex flex-col items-start justify-start  '> 
            <h2 className="font-heading text-3xl pt-5  sm:text-2xl md:text-6xl flex items-center justify-center pb-7">
                Time
            </h2>
            <h2 className="font-heading text-lg -mt-4 sm:text-xl md:text-3xl flex items-center justify-center pb-7">
                We sell the origin of all vaules.
            </h2>
        </div>
        <Clock />
        </div>
    )
}

export default Time