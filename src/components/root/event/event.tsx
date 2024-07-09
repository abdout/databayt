'use client';
import React from "react";
import Title from "@/components/atom/title";
import Countdown from "./timer";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "المؤتمر العام الاول للحركة الوطنية",
    date: "2024-08-14T00:00:00",
    location: "قاعة الصداقة",
  },
  {
    title: "بث مباشر حول المقاومة الشعبية",
    date: "2024-07-14T00:00:00",
    location: "صفحة الفيسبوك",
  },
];

const Event: React.FC = () => {
  return (
    <>
      <Title icon="material-symbols-light:event-outline" placeholder="الاحداث القادمة" />
      <div className="flex items-center justify-center overflow-visible scroll">
        <Carousel className="w-[48rem]" dir="ltr" >
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="flex  items-center justify-center">

                <div className="w-[45rem] h-full relative flex gap-10 items-center justify-center p-8  bg-yellow-400 overflow-visible">
                  <Button size='icon' variant='ghost' className="absolute top-2 left-2 rounded-full">
                    <Icon icon="iconamoon:heart-thin" width={20} height={20} className="" />
                  </Button>
                  <Countdown targetDate={event.date} />
                  <div className="flex flex-col justify-end items-end">
                    <h5 className="pt-2">{event.title}</h5>
                    <div className="flex gap-4 py-2">
                      <p>{new Date(event.date).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })} - </p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                  
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Event;