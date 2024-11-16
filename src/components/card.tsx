import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  src: string;
  name: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, name }) => {
  return (
    <Link href="" className="relative flex flex-col items-center justify-center px-12">
      <Image src={src} alt={name} width={120} height={120} className="p-4" />
      <p className="text-lg text-muted-foreground">{name}</p>
    </Link>
  );
};

export default ProjectCard;
