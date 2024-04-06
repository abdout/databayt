'use client';
import { kit } from '@/constant/kit'
import React from 'react'
import Modal from '../atom/modal/modal';
import { useModal } from '@/provider/modal';
import Profile from './profile';
import Car from './kit';

const KitList = () => {
  const { modal } = useModal();
  const extend = kit.find(kit => kit.id.toString() === modal.id);
  return (
    <>
    {modal.open && extend && (
     <Modal content={<Profile kit={extend} />} />
    )}
    <div className="p-4 grid grid-cols-5  gap-y-28">
      {kit.map((kit, index) => (
        <div className="mb-10 h-40 w-40" key={index}>
          <Car src={kit.src} alt={kit.alt} width={kit.width}  id={kit.id.toString()} bg={kit.bg}/>
        </div>
      ))}
    </div>
    </>
  );
};

export default KitList;