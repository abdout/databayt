"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { automated } from "@/components/automated/constant";
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
import AllFeatures from "@/components/features/all";
import { Icons } from "@/components/icons";
import Photo from "@/components/automated/photo";
import { ReviewPage } from "@/components/automated/video";
import { TableOfContents } from "@/components/automated/toc";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const ProjectPage = () => {
  const { id } = useParams();
  const project = automated.find((project) => project.id === id);
  const [activeSection, setActiveSection] = useState("overview");

  // Create refs for each section
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Scroll to a section when TOC link is clicked
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -100; // Adjust offset to account for header/navigation
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isInViewport = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (!ref.current) return false;
        const { top, bottom } = ref.current.getBoundingClientRect();
        return top <= 200 && bottom >= 200;
      };

      if (isInViewport(faqRef)) {
        setActiveSection("faq");
      } else if (isInViewport(pricingRef)) {
        setActiveSection("pricing");
      } else if (isInViewport(technologyRef)) {
        setActiveSection("technology");
      } else if (isInViewport(featuresRef)) {
        setActiveSection("features");
      } else if (isInViewport(overviewRef)) {
        setActiveSection("overview");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!project) {
    return <p>Project not found!</p>;
  }

  const { name, technologies, livePreview, description } = project;

  // FAQ items
  const faqItems = [
    {
      question: `How can ${name} help my business?`,
      answer: `${name} streamlines your operations by automating key processes, saving time and reducing errors.`
    },
    {
      question: "Is technical knowledge required?",
      answer: `No, ${name} is designed to be user-friendly and requires minimal technical expertise to operate.`
    },
    {
      question: "How long does implementation take?",
      answer: "Most clients are up and running within 1-2 weeks, depending on the complexity of your requirements."
    },
    {
      question: "Is there ongoing support available?",
      answer: `Yes, we provide comprehensive support for all ${name} customers, with regular updates and dedicated technical assistance.`
    },
    {
      question: "Can I integrate with existing systems?",
      answer: `${name} is designed to integrate with a wide range of business tools and platforms, making it easy to fit into your existing workflow.`
    }
  ];

  return (
    <div className="container flex flex-col space-y-4 relative">
      <Link
        href="/"
        className="absolute top-4 md:top-8 flex items-center text-foreground/80 hover:text-foreground group transition-all"
      >
        <span className="flex items-center group-hover:underline">
          Back
        </span>
      </Link>
      
      <div className="flex flex-col md:flex-row items-start justify-between pt-14 md:pt-20">
        <div className="flex space-x-2 ">
          <h2 className="text-lg leading-[1.1] sm:text-3xl md:text-xl ">
           {project.name}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {description}
          </p>
        </div>

        <div className="flex items-start space-x-2 pt-4 md:pt-1">
          <Link
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icon icon="mage:external-link" width="40" height="40" />
            Live Preview
          </Link>

          {/* <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icon icon="bytesize:github" width="40" height="40" />
            GitHub
          </Link> */}
        </div>
      </div>

      {/* Photo Section */}
      <Photo />

      {/* Content with Table of Contents */}
      <div className="flex flex-col lg:flex-row gap-8 relative">
        {/* Main Content */}
        <div className="flex-1">
          {/* Overview Section */}
          <div ref={overviewRef} id="overview" className="scroll-mt-24">
            {/* <Introducation /> */}
            <ReviewPage />
          </div>

          {/* Features Section */}
          <div ref={featuresRef} id="features" className="scroll-mt-24 mt-8">
            {/* <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-4xl pb-2">
              Features
            </h2>
            <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
              {name} offers a comprehensive set of features to streamline your operations.
            </p> */}
            <AllFeatures />
          </div>

          {/* Technology Section */}
          <div ref={technologyRef} id="technology" className="scroll-mt-24 py-8 mt-8">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-4xl pb-2">
              Technology
            </h2>
            <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
              {name} leverages state-of-the-art technology.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div ref={pricingRef} id="pricing" className="scroll-mt-24 py-8 mt-8">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-4xl pb-2">
              Pricing
            </h2>
            <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
              Invest in {name} for your business.
            </p>
            <Price />
          </div>

          {/* FAQ Section */}
          <div ref={faqRef} id="faq" className="scroll-mt-24 py-8 mt-8 mb-16">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-4xl pb-2">
              FAQ
            </h2>
            <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
              Common questions about {name}.
            </p>
            
            <Accordion type="single" collapsible className="w-full max-w-3xl">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40">
                  <AccordionTrigger className="text-left text-foreground/80 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Table of Contents - Now positioned to the right of the content */}
        <div className="hidden lg:block lg:w-64 relative">
          <div className="sticky top-24">
            <TableOfContents 
              activeSection={activeSection}
              overviewRef={overviewRef}
              featuresRef={featuresRef}
              technologyRef={technologyRef}
              pricingRef={pricingRef}
              faqRef={faqRef}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
