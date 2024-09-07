'use client';
import React, { useEffect, useRef, useState } from "react";
import Title from "@/components/atom/title";
import Countdown from "./timer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "المؤتمر العام الاول للحركة الوطنية",
    date: "2024-10-14T00:00:00",
    location: "قاعة الصداقة",
  },
  {
    title: "بث مباشر حول المقاومة الشعبية",
    date: "2024-09-14T00:00:00",
    location: "صفحة الفيسبوك",
  },
];

const feelingColorMap = {
  sad: [
    "hsl(var(--background))",
    "FFC107",
    "hsl(var(--background))",
  ],
};

type Feeling = keyof typeof feelingColorMap;

const MobileEvent: React.FC = () => {
  return (
    <>
      <Title icon="material-symbols-light:event-outline" placeholder="الاحداث القادمة" />
      <div className="items-center justify-center overflow-visible scroll max-w-full block">
        <Carousel className="" dir="ltr">
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <div 
                  className="relative w-full  h-full flex flex-col gap-4 mt-2 items-center justify-center p-8 
                  bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] 
                  before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[30%] 
                  before:origin-center before:animate-blob before:rounded-[40%] before:bg-gradient-to-br 
                  before:from-[--color-a] before:to-yellow-600 before:blur-[70px] before:brightness-125 
                  after:absolute after:right-[10%] after:bottom-[20%] after:h-[60%] after:w-[40%] 
                  after:origin-center after:animate-blob-reverse after:rounded-[35%] after:bg-gradient-to-br 
                  after:from-[--color-a] after:to-yellow-600 after:blur-[70px] after:brightness-125"
                >
                  <Button size='icon' variant='ghost' className="absolute top-2 left-2 rounded-full">
                    <Icon icon="iconamoon:heart-thin" width={20} height={20} />
                  </Button>
                  <Countdown targetDate={event.date} />
                  <div className="flex flex-col justify-center items-center">
                    <strong className="">{event.title}</strong>
                    <div className="flex gap-2 py-2">
                      <p>{new Date(event.date).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })} - </p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

const DesktopEvent: React.FC = () => {
  return (
    <>
      <Title icon="material-symbols-light:event-outline" placeholder="الاحداث القادمة" />
      <div className="items-center justify-center overflow-visible scroll">
        <Carousel className="w-[48rem] mx-20" dir="ltr">
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <div 
                  className="relative w-full mx-8 h-full flex gap-10 items-center justify-center p-8 
                  bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] 
                  before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[30%] 
                  before:origin-center before:animate-blob before:rounded-[40%] before:bg-gradient-to-br 
                  before:from-[--color-a] before:to-yellow-600 before:blur-[70px] before:brightness-125 
                  after:absolute after:right-[10%] after:bottom-[20%] after:h-[60%] after:w-[40%] 
                  after:origin-center after:animate-blob-reverse after:rounded-[35%] after:bg-gradient-to-br 
                  after:from-[--color-a] after:to-yellow-600 after:blur-[70px] after:brightness-125"
                >
                  <Button size='icon' variant='ghost' className="absolute top-2 left-2 rounded-full">
                    <Icon icon="iconamoon:heart-thin" width={20} height={20} />
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

const Event = () => {
  return (
    <div>
      <div className="block md:hidden">
        <MobileEvent />
      </div>
      <div className="hidden md:block">
        <DesktopEvent />
      </div>
    </div>
  );
}

export default Event;