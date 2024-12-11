import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

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
      src: "/codebase/saas.png",
      title: "SaaS",
      description: "Ready-to-use minimal saas",
    },
  ];
  return (
    <div className="space-y-6 ">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center ">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Codebase
        </h2>
        <p className="max-w-[90%] md:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The Repository of Wonders
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 py-10">
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
                className="w-10 h-10 md:w-14 md:h-14 pb-1 md:pb-2"
              />
              <h3 className="text-[15px] md:text-lg font-medium mb-2">{category.title}</h3>
              <p className="max-w-[80%] md:max-w-[70%] leading-normal text-muted-foreground text-[13px] sm:text-sm sm:leading-7">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <Link href="/wizard" className="relative z-10 mt-8">
          <Button size="lg" className="px-8">
            Explore Codebase
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Codebase;
