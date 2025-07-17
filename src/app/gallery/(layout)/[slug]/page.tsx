"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { anim, PageAnim } from "@/components/gallery/work/animations";
import { DataProvider } from "@/components/gallery/work/data-provider";
import { useParams } from "next/navigation";
import { ProgressBar } from "@/components/gallery/work/progress-bar";
import { useDocumentTitle } from "@/components/gallery/work/utils";
import { WorksHeader } from "@/components/gallery/work/works-header";
import { Hero } from "@/components/gallery/work/hero";
import { WorkImages } from "@/components/gallery/work/work-images";
import { WorksLink } from "@/components/gallery/work/works-link";
import { useDataContext } from "@/components/gallery/work/data-provider";

export default function WorkDetails() {
  const params = useParams();
  const slug = params.slug as string;
  const navigating = useRef(false);

  useEffect(() => {
    if (!navigating.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  const setNavigating = (state: boolean) => {
    navigating.current = state;
  };

  return (
    <motion.main {...anim(PageAnim.presencePage)} className="works-details">
      <DataProvider url={`/gallery/works.json/${slug}.json`}>
        <Title />
        <ProgressBar />
        <WorksHeader />
        <Hero />
        <WorkImages />
        <WorksLink setNavigating={setNavigating} />
      </DataProvider>
    </motion.main>
  );
}

const Title = () => {
  const { data } = useDataContext<any>();
  
  useDocumentTitle(
    data?.documentTitle ? data.documentTitle : "Camille Mormal"
  );

  return null;
}; 