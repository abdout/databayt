"use client";

import React from "react";
import Image from "next/image";
// import { ProgressWorks } from "./progress-works";

interface WorkImagesProps {
  data: {
    images: string[][];
  };
}

export const WorkImages: React.FC<WorkImagesProps> = ({ data }) => {
  const { images: imagesData } = data;

  return (
    <section className="works-images" id="works-images">
      {/* <ProgressWorks /> */}
      {imagesData.map((currArImages: string[], i: number) => (
        <div className="works-images__images-wrapper" key={i}>
          {currArImages.map((currImage: string, j: number) => (
            <div className="works-images__image-wrapper" key={j} id={`img-${i}-${j}`}>
              <Image
                src={currImage}
                alt="works"
                className="works-images__image"
                width={844}
                height={470}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                loading="lazy"
                sizes="(max-width: 768px) 90vw, 844px"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}; 