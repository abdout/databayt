'use client';
import RecentArticles from "@/components/root/article/recent";
import Contact from "@/components/root/contact/ui";
import Event from "@/components/root/event/event";
import Scroll from "@/components/root/friend/scroll";
import Hero from "@/components/root/hero/ui";
import Paper from "@/components/root/paper/ui";
import Media from "@/components/root/video/ui";
import "@theme-toggles/react/css/DarkSide.css";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import { SmoothScrollHero } from "@/components/root/gallery/try";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <Hero />
      <div className="space-y-10 pt-10">
        <Paper />
        <Media />
        <RecentArticles />
        <SmoothScrollHero />
        <div className="pb-4 items-center justify-center">
        </div>
        <Event />
        <Scroll />
        <Contact />
      </div>
    </>
  );
}
