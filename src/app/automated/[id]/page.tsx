"use client";
import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/components/automated/constant";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import Price from "@/components/automated/price";
import AllFeatures from "@/components/feature/all";
import { Icons } from "@/components/icons";
import Photo from "@/components/automated/photo";
import { Introducation } from "@/components/automated/intro";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found!</p>;
  }

  const {
    //  name, 
     technologies, livePreview, github } = project;

  return (
    <div className="container flex  flex-col space-y-4 ">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="flex flex-col md:flex-row items-start justify-between pt-14 md:pt-20">
        <div className="flex items-center space-x-2 ">
          <h2 className="text-lg leading-[1.1] sm:text-3xl md:text-xl ">
            {typeof id === "string"
              ? id.charAt(0).toUpperCase() + id.slice(1)
              : Array.isArray(id)
              ? id
                  .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
                  .join(", ")
              : "No ID"}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            - School automation
          </p>
        </div>

        <div className="flex items-start space-x-2">
          <Link
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icon icon="mage:external-link" width="40" height="40" />
            Live Preview
          </Link>

          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icon icon="bytesize:github" width="40" height="40" />
            GitHub
          </Link>
        </div>
      </div>
      <Photo />

      {/* <Carousel className="">
        <CarouselContent>
          {project.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={image}
                  alt={`${name} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      <Introducation />

      <div className=" py-2 pb-4">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-4xl pb-2">
          Technology
        </h2>
        <p className="max-w-[65%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
          Madrsa leverages state-of-the-art technology.
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <AllFeatures />
      <Price />
    </div>
  );
};

export default ProjectPage;
