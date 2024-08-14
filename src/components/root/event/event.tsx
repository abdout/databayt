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
    "hsl(var(--background))", // Background-matching color
    
    "FFC107",     // Yellow (yellow-400) for glowing effect
    "hsl(var(--background))", // Background-matching color
  ],
};

type Feeling = keyof typeof feelingColorMap;

const EventItem: React.FC<{ event: any }> = ({ event }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [feeling, setFeeling] = useState<Feeling>("sad");

  useEffect(() => {
    if (!wrapperRef.current) return;

    const [a, b, c] = feelingColorMap[feeling];

    wrapperRef.current.style.setProperty("--color-a", a);
    wrapperRef.current.style.setProperty("--color-b", b);
    wrapperRef.current.style.setProperty("--color-c", c);
  }, [feeling]);

  return (
    <div 
      ref={wrapperRef}
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
  );
};

const Event: React.FC = () => {
  return (
    <>
      <Title icon="material-symbols-light:event-outline" placeholder="الاحداث القادمة" />
      <div className="flex items-center justify-center overflow-visible scroll">
        <Carousel className="w-[48rem]" dir="ltr" >
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <EventItem event={event} />
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

