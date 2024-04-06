'use client';
import { team } from '@/constant/team'
import React from 'react'
import Team from './team';
import Modal from '../atom/modal/modal';
import { useModal } from '@/provider/modal';
import Create from '../task/crud/create';
import Profile from './profile';


const TeamList = () => {
  const { modal } = useModal();
  const extend = team.find(team => team.id === modal.id);
  return (
    <>
    {modal.open && extend && (
     <Modal content={<Profile team={extend} />} big={true}/>
    )}
    <div className="p-4 grid grid-cols-4 gap-y-4 ">
      {team.map((team, index) => (
        <div className="mb-10 h-40 w-40" key={index}>
          <Team src={team.src} alt={team.alt} width={team.width}  id={team.id}/>
        </div>
      ))}
    </div>
    </>
  );
};

export default TeamList;