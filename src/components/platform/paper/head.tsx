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
        <div className="flex items-center gap-8">
            <Image src={props.image} alt="Picture of the author" width={170} height={50} className="object-cover object-center w-40 h-28"/>
        <div>
            <h2>{props.title}</h2>
            <p>{props.club}</p>
            <p>اخر تحديث: 14 ابريل 2024</p>
            <p className="pb-3">7 دقائق قراءة</p>
        </div>
        </div>

    );
};

export default Head;