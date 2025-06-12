'use client';
import React from 'react';
import ProjectCard from '@/components/automated/card';
import { automated } from '@/components/automated/constant';
import Link from 'next/link';
import PageHeader from '@/components/atom/page-header';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Automated = () => {
  return (
    
      <div className="py-8">
      <div className="flex flex-col items-center space-y-8">
      <PageHeader title="Automated" />
        
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search automated..."
            className="w-full pl-10"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {automated.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            src={project.src}
            name={project.name}
          />
        ))}
      </div>
      </div>
    </div>
     
   
  );
};

export default Automated;
