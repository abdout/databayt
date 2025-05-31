import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../atom/section-heading";

const Codebase = () => {
  const categories = [
    {
      src: "/codebase/atom.png",
      title: "Atom",
      description: "Atomic components for larger structures",
    },
    {
      src: "/codebase/template.png",
      title: "Template",
      description: "Pre-designed layouts for quick setup",
    },
    {
      src: "/codebase/block.png",
      title: "Block",
      description: "Reusable blocks for project assembly",
    },
    {
      src: "/codebase/micro.png",
      title: "Micro",
      description: "Ready-to-use micro serivces",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center">
      <SectionHeading title="Codebase" description="The Repository of Wonders" />
      
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[200px]"
            >
              <Image
                src={category.src}
                alt={category.title}
                width={70}
                height={70}
                className="w-10 h-10 md:w-14 md:h-14 pb-1 md:pb-2 dark:invert"
              />
              <h3 className="text-[15px] md:text-lg font-medium mb-2">{category.title}</h3>
              <p className="max-w-[80%] md:max-w-[70%]  text-muted-foreground text-[13px] sm:text-sm sm:leading-6">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <Link href="https://cb.databayt.org" className="relative z-10 mt-14">
          <Button size="lg" className="px-8">
            Explore Codebase
          </Button>
        </Link>
      
    </section>
  );
};

export default Codebase;
