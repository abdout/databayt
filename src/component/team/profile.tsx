import { FC, useState } from "react";
import { Icon } from "@iconify/react";
import { docs } from "@/constant/team";
import TextIcon from "../atom/icon/text";
import XlIcon from "../atom/icon/xl";

interface TeamDetial {
  src: string;
  alt: string;
  phone?: string;
  mail?: string;
  location?: string;
  width: number;
  height?: number;
  id?: string;
  iqama?: string;
  eligible?: string[]; // eligible is now optional
}

interface Props {
  team: TeamDetial;
}

const Profile: FC<Props> = ({ team }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {team.iqama && (
        <div className="space-y-4 p-2 pt-4">
          <div className="flex items-center space-x-4">
            <XlIcon src={team.src} alt={team.alt} />
            <div className="items-start justify-start flex flex-col space-y-2">
              <h3>{team.alt}</h3>
              <h5>{team.phone}</h5>
              <h5>{team.mail}</h5>
              <h5>{team.location}</h5>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 items-center">
    {docs.map((data, index) => (
      <div className="relative" onClick={() => setSelectedItem(selectedItem === index ? null : index)} key={index}>
        <div className={`p-1 ${selectedItem === index ? 'bg-black text-[#fcfcfc]' : ''}`}>
          <TextIcon icon={data.icon} label={data.label}  />
        </div>
        {selectedItem === index && (
          <div className="absolute left-0 right-0 bg-black text-[#fcfcfc] pl-[13px] z-10">
            <Icon icon='solar:arrow-right-broken' width={40}/>
            <button onClick={() => {/* Handle forward to WhatsApp */}}>
            <Icon icon='ph:whatsapp-logo-thin' width={40}/>
            </button>
            <button onClick={() => {/* Handle forward to Email */}}>
            <Icon icon='circum:mail' width={40}/>
            </button>
          </div>
        )}
      </div>
    ))}
  </div>
        </div>
      )}
        {team.eligible && (
         <div className='flex flex-col gap-4 p-4 pt-8'>
         <h3>Eligibility</h3>
         <div className='flex flex-wrap space-x-4'>
           {team.eligible?.map((test, index) => (
             <h4 key={index} className={`whitespace-nowrap ${index !== (team.eligible?.length ?? 0) - 1 ? 'border-r border-black pr-2' : ''}`}>{test}</h4>
           ))}
         </div>
       </div>
        )}
    </div>
  );
};

export default Profile;