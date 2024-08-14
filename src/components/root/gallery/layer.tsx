import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import Hero from "../hero/ui";
import styles from './styles.module.scss';

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.01]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0.7, 1]);

  return (
    <div
      ref={ref}
      className="w-full h-[120vh]  relative grid place-items-center "
    >
      <motion.div
        style={{ opacity: textOpacity, scale: textScale }}
        className="font-bold text-7xl md:text-9xl sticky z-10"
      >
        <Hero />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/gallery/1.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: imageOpacity,
          scale: imageScale,
        }}
      />
    </div>
  );
}