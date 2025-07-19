"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDataContext } from "./data-provider";
import { useScrollContext } from "./scroll-context";

export const ProgressWorks: React.FC = () => {
  const { data } = useDataContext<any>();
  const { scrollToImages } = useScrollContext();
  const { images: imagesData } = data;
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['0% 50%', '100% 50%'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '100%']);

  return (
    <div className="progress-thumbnail-wrapper" ref={container}>
      <div className="progress-thumbnail">
        <motion.span
          className="progress-thumbnail__view"
          style={{ top: y }}
        />
        {imagesData.map((currArImages: string[], i: number) => (
          <div className="progress-thumbnail__images-wrapper" key={i}>
            {currArImages.map((currImage: string, j: number) => (
              <Image
                src={currImage}
                alt="works"
                className="progress-thumbnail__image"
                key={j}
                width={60}
                height={34}
                onClick={(e) => scrollToImages && scrollToImages(e, `#img-${i}-${j}`)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}; 