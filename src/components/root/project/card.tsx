import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface ProjectCardProps {
  src: string;
  name: string;
  papers: { title: string; desc: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, name, papers }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={`/community/project/${name.toLowerCase()}`}>
    <div
      className="relative flex flex-col items-center justify-center p-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={src} alt={name} width={80} height={80} className="p-3" />
      <h4>{name}</h4>

      {hover && (
        <div className="absolute inset-0 z-10 bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-xs max-h-xs flex items-center justify-center">
            <Carousel className="w-full h-full flex items-center justify-center" dir="ltr" autoPlay={true}>
              <CarouselContent>
                {papers.map((paper, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="w-48 h-40 items-center justify-center">
                        <p>{paper.title}</p>
                        <strong>{paper.desc}</strong>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      )}
    </div>
    </Link>
  );
};

export default ProjectCard;
