'use client';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';
import { Icon } from "@iconify/react";
import ProjectCard from '@/components/card';
import { projects } from '@/components/constant'; // Adjust the import path accordingly
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { ArrowRightIcon } from 'lucide-react';

const Landing = () => {
  return (
    <div className="pt-7">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
      
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Automated
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Beautifully designed. Well maintained. Blazing fast. 
          <Link
            href=""
            className="group inline-flex items-center pl-2 text-black pb-7"
          >
            <span className="underline-offset-4 group-hover:underline">
              Request your automation
            </span>
            <ArrowRightIcon className="ml-1 mt-[4.5px] h-4 w-4" />
          </Link>
        </p>
        
          
          
        
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