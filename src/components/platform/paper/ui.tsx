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


const Paper = () => {
  return (
    <>
    <Title icon="system-uicons:paper" placeholder="أوراق الحركة"/>
    <div className="flex items-center justify-center">
    <Carousel className="w-5/6 -mt-4 items-center justify-center" dir="ltr" autoPlay={true}>
      <CarouselContent >
        {papers.map((paper, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center" dir="rtl">
                  <div className="flex gap-10">
                    <Image
                      src={paper.image}
                      alt={paper.title}
                      width={200}
                      height={150}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        maxWidth: '180px',
                        maxHeight: '150px',
                        minWidth: '180px',
                        minHeight: '150px',
                      }}
                    />
                    <div className="flex flex-col gap-4">
                      <h2>{paper.title}</h2>
                      <p>{paper.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </>
  )
}

export default Paper