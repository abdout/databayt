import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"; // Adjust the import path to where your Button component is located
import Image from "next/image";

const Head = (props: {
    title: string,
    club: string,
    image: string
}) => {
    return (
        <div className="flex items-center gap-4 md:gap-8">
            <Image src={props.image} alt="Picture of the author" width={170} height={50} className="object-cover object-center w-28 h-24 md:w-40 md:h-28"/>
        <div>
            <h2 className="text-lg md:text-2xl truncate">{props.title}</h2>
            <p className="text-sm md:text-lg">{props.club}</p>
            <p className="text-[10px] md:text-lg">اخر تحديث: 14 ابريل 2024</p>
            <p className="text-[10px] md:text-lg pb-3">7 دقائق قراءة</p>
        </div>
        </div>

    );
};

export default Head;