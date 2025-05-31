import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  src: string;
  name: string;
  width?: number;
  height?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  src, 
  name, 
  width = 120, 
  height = 120 
}) => {
  return (
    <Link
      href={`/automated/${id}`}
      className="relative flex flex-col items-center justify-center pb-4"
    >
      <div 
        className="relative overflow-hidden animation-box bg-transparent"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image 
            src={src} 
            alt={name} 
            width={width} 
            height={height} 
            className="p-6 md:p-4 dark:invert object-contain" 
          />
        </div>
      </div>
      <p className="text-md font-normal text-muted-foreground text-center">{id}</p>
    </Link>
  );
};

export default ProjectCard;
