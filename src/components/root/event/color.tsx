import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";
import Countdown from "./timer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Title from "@/components/atom/title";


enum Feeling {
  Sad = 1,
  Neutral = 2,
  Happy = 3,
}

const feelingColorMap = 
["#F4CD28", "	#F7DC6F", "#F2C464"];
 


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

function App() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    if (!wrapperRef.current) return;

    const [a, b, c] = feelingColorMap;

    wrapperRef.current.style.setProperty("--color-a", a);
    wrapperRef.current.style.setProperty("--color-b", b);
    wrapperRef.current.style.setProperty("--color-c", c);
  }, []);

  return (
    <main className="space-y-10">
      <Title icon="material-symbols-light:event-outline" placeholder="الاحداث القادمة" />
      <div className="bg-white absolute top-0 left-2  "></div>
      <div
        ref={wrapperRef}
        className="relative mx-auto aspect-[9/16] w-full h-40 max-w-full overflow-hidden  bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] p-8 duration-500 ease-in [transition-property:_--color-a,_--color-b,_--color-c] before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[70%] before:origin-[60%] before:animate-blob before:rounded-3xl before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:blur-[50px] before:brightness-125 after:absolute after:left-[40%] after:top-[30%] after:h-[80%] after:w-[70%] after:origin-[60%] after:animate-blob-reverse after:rounded-3xl after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-b] after:blur-[50px] after:brightness-125"
      >
        <div className="relative z-10">
        <div className="flex items-center justify-center overflow-visible scroll">
        <Carousel className="w-full " dir="ltr" autoPlay = {true} >
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="flex  items-center justify-center">

                <div className="w-[40rem] h-full relative flex gap-10 items-center justify-center   overflow-visible">
                  <Button size='icon' variant='ghost' className="absolute -top-3 left-1 rounded-full z-50">
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
          <div className=" ">
          <div className="">
          <CarouselPrevious />
          </div>

          </div>
          <div className="absolute top-12 right-10 ">
          <CarouselNext />

          </div>
          
          
        </Carousel>
      </div>
          
        </div>
      </div>
    </main>
  );
}

export default App;
