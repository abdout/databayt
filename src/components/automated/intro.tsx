'use client';

import React from 'react'
import { useParams } from 'next/navigation';
import { useAutomatedI18n } from './use-automated-i18n';

export const Introducation = () => {
  const { id } = useParams();
  const automatedProjects = useAutomatedI18n();
  const project = automatedProjects.find((p) => p.id === id);

  if (!project) {
    return null;
  }

  return (
    <p className="md:max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7 rtl:text-base rtl:leading-8 rtl:text-justify rtl:font-medium">
      <strong className='text-black rtl:font-bold'>{project.name}</strong> {project.body}
    </p>
  )
}
