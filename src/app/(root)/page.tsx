'use client';
import RecentArticles from "@/components/root/article/recent";
import Contact from "@/components/root/contact/ui";
import Event from "@/components/root/event/event";
import Scroll from "@/components/root/friend/scroll";
import Hero from "@/components/root/hero/ui";
import Paper from "@/components/root/paper/ui";
import "@theme-toggles/react/css/DarkSide.css";
import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'
import { fetchYouTubeVideos } from "@/lib/youtube";
import RecentVideos from "@/components/root/video/recent";
import RecentGallery from "@/components/root/gallery/recent";


export default function Home() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await fetchYouTubeVideos(process.env.YOUTUBE_API_KEY!, process.env.CHANNEL_ID!);
      setVideos(fetchedVideos);
    };

    fetchVideos();
  }, []);
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
      <div className="space-y-6 md:space-y-10 pt-6 md:pt-10 -mt-28 md:mt-0">
        <Paper />
        <RecentVideos />
        <RecentArticles />
        <RecentGallery />
        <div className="pb-4 items-center justify-center">
        </div>
        <Event />
        <Scroll />
        <Contact />
      </div>
    </>
  );
}
