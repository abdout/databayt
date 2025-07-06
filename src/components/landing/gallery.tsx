"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import SectionHeading from "../atom/section-heading";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";

export function Gallery() {
  const { t } = useLocale()
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [scale, setScale] = useState(0.8);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(windowHeight / 2 - elementCenter);
      const maxDistance = windowHeight / 2 + rect.height / 2;
      
      // Calculate scale based on how close the element is to the center of viewport
      const normalizedDistance = Math.max(0, Math.min(1, distanceFromCenter / maxDistance));
      const newScale = 0.8 + (1 - normalizedDistance) * 0.2; // Scale from 0.8 to 1.0
      
      setScale(newScale);
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for auto play/pause
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      
      if (isInView && !hasPlayedOnce) {
        videoRef.current.play();
      } else if (!isInView || hasPlayedOnce) {
        videoRef.current.pause();
      }
    }
  }, [isMuted, isInView, hasPlayedOnce]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoEnd = () => {
    setHasPlayedOnce(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title={t('landing.gallery.title')} 
          description={t('landing.gallery.description')} 
          className="text-center mb-8"
        />

        <div className="flex justify-center mb-12">
          <Link href="/gallery">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-3 text-base font-medium min-w-[140px] hover:scale-105 transition-transform"
            >
              {t('landing.gallery.button')}
            </Button>
          </Link>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden bg-black/5 transition-transform duration-300 ease-out shadow-lg"
          style={{ 
            transform: `scale(${scale})`,
            willChange: 'transform'
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop={false}
            muted={isMuted}
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src="/story.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="absolute bottom-4 end-4 rtl:end-auto rtl:start-4 flex items-center gap-3 bg-black/30 px-3 py-2 rounded-lg backdrop-blur-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded-full flex-shrink-0"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            <span className="text-white/90 text-sm font-medium leading-relaxed">
              {t('landing.gallery.company')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
