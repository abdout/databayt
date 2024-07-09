'use client';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { cardsData } from "./constant";

const Excute = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className='flex gap-2 justify-start items-center pr-1'>
        <Icon icon='codicon:verified' width={20} />
        <h5>المكتب التنفيذي</h5>
      </div>
      <div className="grid grid-cols-4 gap-8 scroll items-center justify-center">
        {cardsData.map((card, index) => (
        <Card key={index} className="group w-[180px] flex flex-col p-3 gap-2 items-center justify-center relative border border-transparent">
        <div className="border-animation border absolute inset-0 pointer-events-none">
          <span className="absolute inset-0"></span>
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
            <Icon icon={card.email} width={30} className="reveal" />
            <Icon icon={card.phone} width={30} className="reveal" />
          </div>
        </div>
      </Card>
      
      
       
        
        
        ))}
      </div>
    </div>
  );
}

export default Excute;