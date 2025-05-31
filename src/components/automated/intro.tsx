import React from 'react'
import { useParams } from 'next/navigation';
import { automated } from './constant';

export const Introducation = () => {
  const { id } = useParams();
  const project = automated.find((p) => p.id === id);

  if (!project) {
    return null;
  }

  return (
    <p className="md:max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
      <strong className='text-black'>{project.name}</strong> {project.body}
    </p>
  )
}
