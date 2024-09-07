import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Title from "@/components/atom/title";
import Link from "next/link";
import { pictures } from "./constant";

const MobileRecent = () => {
  return (
    <>
      <Title icon="ph:camera-light" placeholder="معرض الصور"/>
      <div className="flex items-center justify-center mt-4 -mx-8 scroll z-20">
        <Carousel className="w-full" dir="ltr" autoPlay={true}>
          <CarouselContent>
            {pictures.map((picture, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Link href={`/awrag/${picture.id}`} key={picture.id}>
                    <Card key={index} className="relative">
                      <Image
                        src={picture.image || '/hero/history.webp'}
                        alt="image"
                        width={800}
                        height={600}
                        className="object-cover object-center w-full h-64"
                      />
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default MobileRecent;