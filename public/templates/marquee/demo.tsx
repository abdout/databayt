"use client"

import React, { useState } from "react"
import { features } from "./constant"
import { FeatureCard } from "./card"
import SimpleMarquee from "./marquee"

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-2 sm:mx-3 md:mx-4 hover:scale-105 cursor-pointer duration-300 ease-in-out">
    {children}
  </div>
)

// Compact version for embedding in sections
export function CompactMarqueeDemo() {
  // Split features into three groups for the three marquee rows
  const firstThird = features.slice(0, Math.floor(features.length / 3))
  const secondThird = features.slice(
    Math.floor(features.length / 3),
    Math.floor((2 * features.length) / 3)
  )
  const lastThird = features.slice(Math.floor((2 * features.length) / 3))

  return (
    <div className="w-full h-[230px] relative overflow-hidden">
      <div className="h-full w-full justify-center items-center flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
        <SimpleMarquee
          className="w-full"
          baseVelocity={2}
          repeat={4}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          direction="left"
        >
          {firstThird.map((feature) => (
            <MarqueeItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                name={feature.name}
                className="bg-muted/20 border hover:bg-muted/50 transition-all duration-300"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={2}
          repeat={4}
          scrollAwareDirection={true}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowdownOnHover
          slowDownFactor={0.1}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          useScrollVelocity={true}
          draggable={false}
          direction="right"
        >
          {secondThird.map((feature) => (
            <MarqueeItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                name={feature.name}
                className="bg-muted/20 border hover:bg-muted/50 transition-all duration-300"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>

        {/* Third row commented out */}
        {/* <SimpleMarquee
          className="w-full"
          baseVelocity={2}
          repeat={4}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          direction="left"
        >
          {lastThird.map((feature) => (
            <MarqueeItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                name={feature.name}
                className="bg-background border hover:bg-muted/50 transition-all duration-300"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee> */}
      </div>
    </div>
  )
}

// Full-screen version for lab page
export default function SimpleMarqueeDemo() {
  // Split features into three groups for the three marquee rows
  const firstThird = features.slice(0, Math.floor(features.length / 3))
  const secondThird = features.slice(
    Math.floor(features.length / 3),
    Math.floor((2 * features.length) / 3)
  )
  const lastThird = features.slice(Math.floor((2 * features.length) / 3))

  const [container, setContainer] = useState<HTMLElement | null>(null)

  return (
    <div
      className="flex w-dvw h-dvh  relative justify-center items-center flex-col overflow-x-hidden overflow-y-auto"
      ref={(node) => setContainer(node)}
    >
      <div className="absolute h-[170%] sm:h-[200%] top-0 w-full justify-center items-center flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
        <SimpleMarquee
          className="w-full"
          baseVelocity={2}
          repeat={4}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          scrollContainer={container ? { current: container } : undefined}
          useScrollVelocity={true}
          direction="left"
        >
          {firstThird.map((feature) => (
            <MarqueeItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                name={feature.name}
                className="bg-muted/20 border hover:bg-muted/50 transition-all duration-300"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={2}
          repeat={4}
          scrollAwareDirection={true}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowdownOnHover
          slowDownFactor={0.1}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          useScrollVelocity={true}
          scrollContainer={container ? { current: container } : undefined}
          draggable={false}
          direction="right"
        >
          {secondThird.map((feature) => (
            <MarqueeItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                name={feature.name}
                className="bg-muted/20 border hover:bg-muted/50 transition-all duration-300"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={2}
          repeat={4}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          scrollContainer={container ? { current: container } : undefined}
          useScrollVelocity={true}
          direction="left"
        >
          {lastThird.map((feature) => (
            <MarqueeItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                name={feature.name}
                className="bg-muted/20 border hover:bg-muted/50 transition-all duration-300"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>
      </div>
    </div>
  )
}
