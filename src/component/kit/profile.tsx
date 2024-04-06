'use client';
import { FC, useState } from "react";
import XlIcon from "../atom/icon/xl";
import { docs } from "@/constant/kit";
import TextIcon from "../atom/icon/text";


interface KitDetial {
  src:string,
  alt: string,
  id: number,
  bg?: string
  calibration?: string,
  datasheet?: string,
  manual?: string,
  price?: string,
  status?: string,
  under?: string,
  km?: number,
  width?: number,
  licence?: string,
  penalty?: string,
}

interface Props {
  kit: KitDetial;
}

const Profile: FC<Props> = ({ kit }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);


  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-6 pl-2">
            <XlIcon src={kit.src} alt={kit.alt}/>
            <div className="items-start justify-start flex flex-col space-y-1">
              <h3>{kit.alt}</h3>
              <h5>{kit.id}</h5>
              <h5>{kit.under}</h5>
              <h5>{kit.status}</h5>
            </div>
          </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
              {docs.map((data, index) => (
              <div className="relative" onClick={() => setSelectedItem(selectedItem === index ? null : index)} key={index}>
                <div className={`p-1 ${selectedItem === index ? 'bg-black text-[#fcfcfc]' : ''}`}>
                  {data && <TextIcon icon={data.icon} label={data.label}  />}
                </div>
              </div>
            ))}
          </div>
    
    </div>
    
  );
};

export default Profile;