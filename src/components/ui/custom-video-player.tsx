"use client"

import { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import { Button } from "./button"
import { Volume2, VolumeX } from "lucide-react"

interface CustomVideoPlayerProps {
  url: string
  className?: string
}

export function CustomVideoPlayer({ url, className = "" }: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [scale, setScale] = useState(0.8)
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be")

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const distanceFromCenter = Math.abs(windowHeight / 2 - elementCenter)
      const maxDistance = windowHeight / 2 + rect.height / 2
      
      const normalizedDistance = Math.max(0, Math.min(1, distanceFromCenter / maxDistance))
      const newScale = 0.8 + (1 - normalizedDistance) * 0.2
      
      setScale(newScale)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVideoEnd = () => {
    setHasPlayedOnce(true)
  }

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-video w-full max-w-3xl mx-auto rounded-sm overflow-hidden bg-black/5 transition-transform duration-300 ease-out ${className}`}
      style={{ 
        transform: `scale(${scale})`,
        willChange: 'transform'
      }}
    >
      {isYouTube ? (
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          playing={isInView && !hasPlayedOnce}
          muted={isMuted}
          onEnded={handleVideoEnd}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
                color: "white",
                controls: 0,
                showinfo: 0,
              },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ) : (
        <video
          className="w-full h-full object-cover"
          loop={false}
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnd}
          autoPlay={isInView && !hasPlayedOnce}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
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
  )
} 