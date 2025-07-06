'use client'

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../atom/section-heading";
import { useLocale } from "@/hooks/use-locale";

const Codebase = () => {
  const { t } = useLocale()

  const categories = [
    {
      src: "/codebase/atom.png",
      title: t('landing.codebase.categories.atom.title'),
      description: t('landing.codebase.categories.atom.description'),
    },
    {
      src: "/codebase/template.png",
      title: t('landing.codebase.categories.template.title'),
      description: t('landing.codebase.categories.template.description'),
    },
    {
      src: "/codebase/block.png",
      title: t('landing.codebase.categories.block.title'),
      description: t('landing.codebase.categories.block.description'),
    },
    {
      src: "/codebase/micro.png",
      title: t('landing.codebase.categories.micro.title'),
      description: t('landing.codebase.categories.micro.description'),
    },
  ];
  return (
    <section className="codebase-section py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title={t('landing.codebase.title')} 
          description={t('landing.codebase.description')} 
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0 mb-2">
                <Image
                  src={category.src}
                  alt={category.title}
                  width={70}
                  height={70}
                  className="w-12 h-12 md:w-16 md:h-16 dark:invert"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold leading-tight mb-3 min-h-[2.5rem] flex items-center">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[280px]">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="https://cb.databayt.org" className="relative z-10">
            <Button 
              size="lg" 
              className="px-8 py-3 text-base font-medium min-w-[160px] hover:scale-105 transition-transform"
            >
              {t('landing.codebase.exploreButton')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Codebase;
