'use client';
import React from 'react';
import ProjectCard from '@/components/automated/card';
import { automated } from '@/components/automated/constant';
import SectionHeading from '@/components/atom/section-heading';
import { ArrowRightIcon } from 'lucide-react';

const Automated = () => {
  return (
    <section className="py-14">
      <SectionHeading
        title="Automated"
        description="Beautifully designed. Well maintained. Blazing fast."
        linkText="Request your automation"
        linkHref="#"
        linkTarget="_blank"
        linkIcon={<ArrowRightIcon className="h-4 w-4" />}
      />
      
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-x-32 items-center justify-between">
        {automated.map((project, index) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            src={project.src}
            name={project.name}
            width={index === 3 ? 115 : index === 4 ? 140 : 120}
            height={index === 3 ? 115 : index === 4 ? 140 : 120}
          />
        ))}
      </div>
    </section>
  );
};

export default Automated;
