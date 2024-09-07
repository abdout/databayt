import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { papers } from "./constant"
import Image from "next/image"
import Title from "@/components/atom/title"
import Link from "next/link"


const MobileRecent = () => {
    return (
        <>
        <Title icon="system-uicons:paper" placeholder="أوراق الحركة"/>
            <div className="flex items-center justify-center mt-10 scroll z-20">
                <Carousel className="w-80 -mt-4 items-center justify-center" dir="ltr" autoPlay={true}>
                    <CarouselContent >
                        {papers.map((paper, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Link href={`/awrag/${paper.id}`} key={paper.id}>
                                        <Card key={index} className="relative ">
                                            <Image
                                                src={paper.image || '/hero/history.webp'}
                                                alt={paper.title}
                                                width={400}
                                                height={400}
                                                className="object-cover object-center w-full block h-44"
                                            />
                                            <CardContent className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center leading-8 font-black  backdrop-blur-xl py-2 w-full mt-4">
                                                    {/* Split the title and render each word on a new line */}
                                                    {paper.title.split(" ").map((word, wordIndex) => (
                                                        <h4 key={wordIndex} className="font-black">{word}</h4>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}

export default MobileRecent