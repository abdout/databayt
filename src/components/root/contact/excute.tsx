'use client';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { cardsData } from "./constant";


const MobileExcute = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className='flex gap-2 justify-start items-center pr-1'>
        <Icon icon='codicon:verified' width={16} />
        <h6>المكتب التنفيذي</h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} className="group w-full md:w-[180px] flex  p-4 gap-6 items-center  relative border border-transparent">
            <div className="border-animation border absolute inset-0 pointer-events-none">
              <span className="absolute inset-0"></span>
              <div className="left-top absolute top-0 left-0"></div>
              <div className="left-bottom absolute bottom-0 left-0"></div>
              <div className="right-top absolute top-0 right-0"></div>
              <div className="right-bottom absolute bottom-0 right-0"></div>
            </div>
            <Image
              src={card.image}
              alt={card.name}
              width={100}
              height={100}
              className="rounded-full object-cover object-center w-24 h-24"
            />
            <div className="flex flex-col">
              <p className="font-light">{card.name}</p>
              <h5>{card.rank}</h5>
              <div className="flex gap-4 pt-2">
                <a href={`mailto:${card.send}`} aria-label={`Email ${card.name}`}>
                  <Icon icon={card.email} width={30} className="reveal" />
                </a>
                <a href={`tel:${card.dail}`} aria-label={`Call ${card.name}`}>
                  <Icon icon={card.phone} width={30} className="reveal" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

const DesktopExcute = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className='flex gap-2 justify-start items-center pr-1'>
        <Icon icon='codicon:verified' width={20} />
        <h5>المكتب التنفيذي</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} className="group w-full md:w-[180px] flex flex-col p-3 gap-2 items-center justify-center relative border border-transparent">
            <div className="border-animation border absolute inset-0 pointer-events-none">
              <span className="absolute inset-0"></span>
              <div className="left-top absolute top-0 left-0"></div>
              <div className="left-bottom absolute bottom-0 left-0"></div>
              <div className="right-top absolute top-0 right-0"></div>
              <div className="right-bottom absolute bottom-0 right-0"></div>
            </div>
            <Image
              src={card.image}
              alt={card.name}
              width={75}
              height={75}
              className="rounded-full object-cover object-center w-20 h-20"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="font-light">{card.name}</p>
              <h5>{card.rank}</h5>
              <div className="flex gap-4 pt-2">
                <a href={`mailto:${card.send}`} aria-label={`Email ${card.name}`}>
                  <Icon icon={card.email} width={30} className="reveal" />
                </a>
                <a href={`tel:${card.dail}`} aria-label={`Call ${card.name}`}>
                  <Icon icon={card.phone} width={30} className="reveal" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

const Excute = () => {
  return (
    <div>
      <div className="block md:hidden">
        <MobileExcute />
      </div>
      <div className="hidden md:block">
        <DesktopExcute />
      </div>
    </div>
  );
}

export default Excute;
