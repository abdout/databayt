// Kit.tsx
import LgIcon from '@/component/atom/icon/lg';
import React from 'react';

interface KitItem {
  image: string;
}

interface KitProps {
  items: KitItem[];
}

const Kit: React.FC<KitProps> = ({ items }) => {
  return (
    <div className='flex flex-col gap-4'>
        <h3>Kit</h3>
    <div className="flex space-x-6">
      {items.map((item, index) => (
        <div key={index} className="relative ">
          <LgIcon src={item.image} alt="Kit Item" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Kit;