import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  src: string;
  name: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, src, name }) => {
  return (
    <Link
      href={`/automated/${id}`}
      className="relative flex flex-col items-center justify-center px-12"
    >
      <Image src={src} alt={name} width={120} height={120} className="p-4" />
      <p className="text-lg text-muted-foreground">{id}</p>
    </Link>
  );
};

export default ProjectCard;