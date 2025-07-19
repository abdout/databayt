"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { anim, PageAnim, WorksAnim } from "./animations";
import { AnchorLink } from "./anchor-link";

interface HeroProps {
  data: {
    hero: {
      image: string;
      title: string[];
      leadDesigner: string;
      doneWith: string;
    };
  };
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { hero: heroData } = data;
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0% 0%", "100% 0%"],
  });

  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["50% 0vh", "50% 20vh"]
  );

  return (
    <motion.section
      {...anim(PageAnim.block)}
      className="hero"
      ref={container}
    >
      <motion.img
        src={heroData.image}
        alt=""
        className="hero__background"
        style={{ objectPosition }}
      />
      <div className="description">
        <h1 className="title">
          {heroData.title.map((currT: string, i: number) => (
            <motion.span 
              {...anim(WorksAnim.hero)} 
              custom={i} 
              key={i}
              style={{ 
                fontWeight: 400,
                fontSize: "2.5vw",
                lineHeight: "105%",
                letterSpacing: "0.05vw",
                color: "#fff"
              }}
            >
              {currT}
            </motion.span>
          ))}
        </h1>

        <div className="lead-designer">
          <motion.h2
            {...anim(WorksAnim.hero)}
            custom={2.5}
            style={{
              fontWeight: 500,
              fontSize: "1.5vw",
              lineHeight: "105%",
              letterSpacing: "0.05vw",
              color: "#fff"
            }}
          >
            Lead Designer
          </motion.h2>
          <motion.p
            {...anim(WorksAnim.hero)}
            custom={3}
            className="small-text shadow"
            style={{
              paddingTop: "1vw",
              fontWeight: 400,
              fontSize: "1.4vw",
              lineHeight: "115%",
              letterSpacing: "0.1vw",
              color: "#f0f0f0"
            }}
            dangerouslySetInnerHTML={{ __html: heroData.leadDesigner }}
          />
        </div>

        <div className="done-with">
          <motion.h2
            {...anim(WorksAnim.hero)}
            custom={3.5}
            style={{
              fontWeight: 500,
              fontSize: "1.5vw",
              lineHeight: "105%",
              letterSpacing: "0.05vw",
              color: "#fff"
            }}
          >
            Done With
          </motion.h2>
          <motion.p
            {...anim(WorksAnim.hero)}
            custom={4}
            className="small-text shadow"
            style={{
              paddingTop: "1vw",
              fontWeight: 400,
              fontSize: "1.4vw",
              lineHeight: "115%",
              letterSpacing: "0.1vw",
              color: "#f0f0f0"
            }}
          >
            {heroData.doneWith}
          </motion.p>
        </div>

        <div 
          className="scroll-down"
          style={{
            fontWeight: 400,
            fontSize: "1.3vw",
            lineHeight: "115%",
            letterSpacing: "0.1vw",
            color: "#f0f0f0",
            padding: 0,
            margin: 0,
            marginLeft: "-1vw"
          }}
        >
          <AnchorLink className="small-text" toSection="#works-images">
            Scroll down
          </AnchorLink>
        </div>
      </div>
    </motion.section>
  );
}; 