'use client';
import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/components/automated/constant";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icon } from '@iconify/react'
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Price from "@/components/automated/price";
import AllFeatures from "@/components/feature/all";

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return <p>Project not found!</p>;
    }

    const { name, technologies, livePreview, github } = project;

    return (
        <div className="px-32 py-10">
            <div className="flex items-end justify-end ">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }, ),
                "px-4"
              )}
            >
              Back
            </Link>
            </div>
            <div className="-mx-3">
                <p className="pb-2 pl-4 leading-normal sm:text-lg sm:leading-7">
                    {name}
                </p>
                <div className="flex items-center space-x-2 pb-2 ">
                    <Image src={project.src} alt={name} width={60} height={60} />
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl -mt-1">
                        {typeof id === "string"
                            ? id.charAt(0).toUpperCase() + id.slice(1)
                            : Array.isArray(id)
                                ? id.map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(", ")
                                : "No ID"}
                    </h2>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
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

            <Carousel className="">
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
            </Carousel>

            <div className="px-2 mt-8">
                <h2 className="text-xl font-semibold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <Badge key={index} variant='secondary'>
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