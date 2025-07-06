import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/hooks/use-locale";

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
  const { t } = useLocale();
  
  return (
    <Link
      href={`/automated/${id}`}
      className="relative flex flex-col items-center justify-center pb-4 group"
      aria-label={t(`pages.automated.viewProject`)}
    >
      <div 
        className="relative overflow-hidden animation-box bg-transparent transition-transform duration-300 group-hover:scale-105"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image 
            src={src} 
            alt={name} 
            width={width} 
            height={height} 
            className="p-6 md:p-4 dark:invert object-contain transition-opacity duration-300" 
          />
        </div>
      </div>
      <p className="text-md font-normal text-muted-foreground text-center rtl:text-center rtl:font-medium rtl:text-base">{name}</p>
    </Link>
  );
};

export default ProjectCard;
