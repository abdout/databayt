import React from 'react';
import Image from 'next/image';
import {  CarouselItem } from '@/components/ui/carousel';
import { Card, } from '@/components/ui/card';
import Link from 'next/link';

interface ProjectCardProps {
  src: string;
  name: string;
  papers: { title: string; desc: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, name, papers }) => {
  // const [hover, setHover] = useState(false);

  return (
    <Link href=''>
    <div
      className="relative flex flex-col items-center justify-center px-12"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      <Image src={src} alt={name} width={120} height={120} className="p-4" />
      <p className="text-lg text-muted-foreground">{name}</p>

      {/* {hover && ( */}
        <div className="absolute inset-0 z-10 bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-xs max-h-xs flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center" dir="ltr">
              
                {papers.map((paper, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <div className="w-48 h-40 items-center justify-center">
                        <p>{paper.title}</p>
                        <strong>{paper.desc}</strong>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
    </Link>
  );
};

export default ProjectCard;
