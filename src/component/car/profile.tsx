'use client';
import { FC, useState } from "react";
import TextIcon from "../atom/icon/text";
import { docs } from "@/constant/car";
import Image from "next/image";

interface CarDetial {
  src:string,
  alt: string,
  id: string,
  sim: string,
  petrol: number,
  oil: string,
  history: string,
  status: string,
  under: string,
  km: number,
  width: number,
  licence: string,
  penalty: string,
}

interface Props {
  car: CarDetial;
}


const Profile: FC<Props> = ({ car }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);


  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
            <Image src={car.src} alt={car.alt} width={170} height = {170}/>
            <div className="items-start justify-start flex flex-col ">
              <h3>{car.alt}</h3>
              <h5>{car.id}</h5>
              <h5>{car.under}</h5>
              <h5>{car.status}</h5>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
    {docs.map((data, index) => (
      <div className="relative" onClick={() => setSelectedItem(selectedItem === index ? null : index)} key={index}>
        <div className={`p-1 ${selectedItem === index ? 'bg-black text-[#fcfcfc]' : ''}`}>
          <TextIcon icon={data.icon} label={data.label}  />
        </div>
        </div>
    ))}
  </div>
    </div>
    
  );
};

export default Profile;