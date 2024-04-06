'use client';
import { car } from '@/constant/car'
import React from 'react'
import Modal from '../atom/modal/modal';
import { useModal } from '@/provider/modal';
import Profile from './profile';
import Car from './car';

const CarList = () => {
  const { modal } = useModal();
  const extend = car.find(car => car.id === modal.id);
  return (
    <>
    {modal.open && extend && (
     <Modal content={<Profile car={extend} />} />
    )}
    <div className="p-4 grid grid-cols-5  gap-y-28">
      {car.map((car, index) => (
        <div className="mb-10 h-40 w-40" key={index}>
          <Car src={car.src} alt={car.alt} width={car.width}  id={car.id} />
        </div>
      ))}
    </div>
    </>
  );
};

  
export default CarList;