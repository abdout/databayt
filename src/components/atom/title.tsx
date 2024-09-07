"use client";
import React from 'react';
import { Icon } from "@iconify/react";

type TitleProps = {
    icon: string;
    placeholder: string;
    big?: boolean; // Optional prop
};

const Title = ({ icon, placeholder, big }: TitleProps) => {
    return (
        <div className='flex gap-1 md:gap-2 items-center scale-75 md:scale-100 -mx-14 md:mx-0'>
            <Icon icon={icon} width={big ? 35 : 30} /> {/* Adjust width based on 'big' prop */}
            <h4 className={big ? 'tesxt-xl md:text-2xl' : ''}> {/* Adjust text size based on 'big' prop */}
                {placeholder}
            </h4>
        </div>
    );
};

export default Title;
