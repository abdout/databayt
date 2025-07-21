"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import SectionHeading from "../atom/section-heading";
import { Volume2, VolumeX } from "lucide-react";

export function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [scale, setScale] = useState(0.9);
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
      const newScale = 0.9 + (1 - normalizedDistance) * 0.1; // Scale from 0.9 to 1.0
      
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
    <section className="py-16 flex flex-col items-center justify-center">
      <SectionHeading 
        title="Gallery" 
        description="Explore our portfolio showcasing innovative business automation solutions, custom software development, and successful digital transformation projects that have helped companies streamline their operations and boost productivity." 
      />

      <Link href="/gallery">
        <Button variant="outline" size="lg" className="rounded-full">
            Gallery
            </Button>
          </Link>

      <div 
        ref={containerRef}
        className="mt-10 relative aspect-video w-full max-w-3xl mx-auto rounded-sm overflow-hidden bg-black/5 transition-transform duration-500 ease-out"
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
        
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded-full"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          <span className="text-white text-sm font-medium">databayt</span>
            </div>
          </div>
    </section>
  );
}
