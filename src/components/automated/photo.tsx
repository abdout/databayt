'use client';
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

const photos = [
  { src: "/templates/fallback.png", alt: "Large image" },
  { src: "/templates/a.png", alt: "Top left small image" },
  { src: "/templates/sudan.jpg", alt: "Top right small image" },
  { src: "/templates/c.png", alt: "Bottom left small image" },
  { src: "/templates/d.png", alt: "Bottom right small image" },
]

const Photo = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 50) {
      // Swipe left
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
    } else if (diff < -50) {
      // Swipe right
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
    }

    touchStartX.current = null
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
          <div className="relative h-full group">
            <Image
              src="/templates/fallback.png"
              alt="Large image"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-tl-md rounded-bl-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          {/* Right half - 2x2 grid of smaller images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <div className="relative group">
              <Image
                src="/templates/a.png"
                alt="Top left small image"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="relative group">
              <Image
                src="/templates/sudan.jpg"
                alt="Top right small image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-tr-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="relative group">
              <Image
                src="/templates/c.png"
                alt="Bottom left small image"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* Bottom right small image with "Show all photos" always visible */}
            <div className="relative group">
              <Image
                src="/templates/d.png"
                alt="Bottom right small image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-br-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute bottom-4 right-4 bg-background px-3 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
                Show all photos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo
