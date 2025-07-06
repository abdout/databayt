'use client';
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useAutomatedI18n } from './use-automated-i18n';
import { useLocale } from "@/hooks/use-locale";

const Photo = () => {
  const { id } = useParams();
  const { t } = useLocale();
  const automatedProjects = useAutomatedI18n();
  const project = automatedProjects.find((p) => p.id === id);
  
  // Use project images from automated data or fallback to placeholders
  const photos = project?.images 
    ? project.images.map((src) => ({ src, alt: `${project?.name || 'Project'} screenshot` }))
    : [
        { src: "/templates/fallback.png", alt: "Fallback image" },
      ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swipe left
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    } else if (diff < -50) {
      // Swipe right
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    }

    touchStartX.current = null;
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      } else if (e.key === 'Escape' && showAllPhotos) {
        setShowAllPhotos(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photos.length, showAllPhotos]);

  // If there are no photos, don't render anything
  if (photos.length === 0) {
    return null;
  }

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 bg-black z-50 overflow-y-auto py-4">
        <button
          onClick={() => setShowAllPhotos(false)}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {photos.map((photo, index) => (
            <div key={index} className="aspect-video relative overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onClick={() => setCurrentPhotoIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-8xl mx-auto">
      {/* Mobile version */}
      <div className="md:hidden -mx-4">
        <div 
          className="relative h-[400px] w-[calc(100%+2rem)] -mx-[1rem] sm:w-[calc(100%+3rem)] sm:-mx-[1.5rem] md:w-[calc(100%+4rem)] md:-mx-[2rem] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={photos[currentPhotoIndex].src}
            alt={photos[currentPhotoIndex].alt}
            fill
            style={{ objectFit: 'cover' }}
            className=""
          />
          <div className="absolute bottom-4 right-4 bg-background px-3 py-2 rounded-md text-sm font-medium">
            {currentPhotoIndex + 1} / {photos.length}
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-2 h-[400px] overflow-hidden rounded-xl">
          {/* Left half - large image */}
          <div className="relative h-full group cursor-pointer" onClick={() => setShowAllPhotos(true)}>
            <Image
              src={photos[0]?.src || "/templates/fallback.png"}
              alt={photos[0]?.alt || "Main image"}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-tl-md rounded-bl-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          {/* Right half - 2x2 grid of smaller images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <div className="relative group cursor-pointer" onClick={() => setShowAllPhotos(true)}>
              <Image
                src={photos[1]?.src || photos[0]?.src || "/templates/fallback.png"}
                alt={photos[1]?.alt || "Image 1"}
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="relative group cursor-pointer" onClick={() => setShowAllPhotos(true)}>
              <Image
                src={photos[2]?.src || photos[0]?.src || "/templates/fallback.png"}
                alt={photos[2]?.alt || "Image 2"}
                
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-tr-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="relative group cursor-pointer" onClick={() => setShowAllPhotos(true)}>
              <Image
                src={photos[3]?.src || photos[0]?.src || "/templates/fallback.png"}
                alt={photos[3]?.alt || "Image 3"}
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* Bottom right small image with "Show all photos" always visible */}
            <div className="relative group cursor-pointer" onClick={() => setShowAllPhotos(true)}>
              <Image
                src={photos[4]?.src || photos[0]?.src || "/templates/fallback.png"}
                alt={photos[4]?.alt || "Image 4"}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-br-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 bg-background px-3 py-2 rounded-md flex items-center gap-2 text-sm rtl:text-base font-medium rtl:font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
                {t("pages.automated.showAllPhotos")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo
