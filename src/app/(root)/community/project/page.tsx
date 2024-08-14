'use client';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';
import { Icon } from "@iconify/react";
import ProjectCard from '@/components/root/project/card';
import { projects } from '@/components/root/project/constant'; // Adjust the import path accordingly

const Landing = () => {
  return (
    <div className="pt-7">
      <p className="font-light text-lg flex items-center justify-center">
        Read the <strong className='animate-bounce'>&nbsp;paradigm&nbsp;</strong> behind community projects.
      </p>
      <div className="flex flex-col gap-6 items-center justify-center p-8">
        <div className="relative w-72">
          <Input placeholder="Browse projects" type="search" className="w-full pl-4 pr-10" />
          <Icon icon="mynaui:search" width={10} className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7 items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard src={project.src} name={project.name} papers={project.papers} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
