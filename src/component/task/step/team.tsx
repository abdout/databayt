import Image from 'next/image';
import Input from "@/component/atom/input/input";
import { eng, tech } from "@/type/task/image";
import React, { useState } from "react";

const Team = (props: { team: string[]; setTeam: (value: string[]) => void }) => {
  const { team, setTeam } = props;
  const defaultImage = '/team/eng/user.svg';

  const handleImageClick = (image: string) => {
    if (image === defaultImage) {
      setTeam([defaultImage]);
    } else if (team.includes(image)) {
      setTeam(team.filter(i => i !== image));
    } else {
      setTeam([...team.filter(i => i !== defaultImage), image]);
    }
  };

  const renderImages = (images: string[]) => (
    <div className="flex ">
      {images.map((image, index) => (
        <div key={index} className="mx-2 flex flex-col"> {/* Apply flex and flex-direction here */}
          <div className="border rounded-full">
            <Image
              src={image}
              alt={`team-${index}`}
              width={50}
              height={50}
         
              className={`object-cover ${team.includes(image) ? 'opacity-100' : 'opacity-70'}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className='flex flex-col space-y-4'>
      <h3>Eng.</h3>
      {renderImages(eng)}

      <h3 className='pt-4'>Tech.</h3>
      {renderImages(tech)}
    </div>
  );
};

export default Team;