import React from 'react';
import Title from '../atom/databayt';
import Link from 'next/link';
import { Icon } from "@iconify/react";

interface IconProps {
  src: string;
  width: number;
  path: string;
}

interface WelcomeProps {
  title: string;
  desc: string;
  book: string;
  icons: IconProps[];
}

const Welcome: React.FC<WelcomeProps> = ({ title, desc, book, icons }) => {
  return (
    <div className='px-7 pt-28'>
      <Title title={title} description='Welcome to' />
      <p className="text-[18px] font-light tracking-wider pb-7">
        {desc} 
        <br /> to <strong>contribute</strong>, you may track the ongoing development by reviewing the 
        { book} respectively 👇.
      </p>
      <div className="flex gap-6 items-center">
        {icons.map((icon, index) => (
          <Link key={index} href={icon.path}>
            <Icon
              icon={icon.src}
              width={icon.width}
              color='black'
              className='reveal-less'
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
