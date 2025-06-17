"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "./button"
import { Volume2, VolumeX } from "lucide-react"

// Dynamically import ReactPlayer with no SSR
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
})

interface CustomVideoPlayerProps {
  url: string
  className?: string
}

export function CustomVideoPlayer({ url, className = "" }: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be")

  // Handle client-side only mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

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
  }, [isMounted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVideoEnd = () => {
    setHasPlayedOnce(true)
  }

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-video w-full max-w-3xl mx-auto rounded-sm overflow-hidden bg-black/5 ${className}`}
    >
      <Suspense fallback={
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
          <div className="text-sm text-muted-foreground">Loading...</div>
        </div>
      }>
        {isYouTube ? (
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-[-60px]">
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                playing={isInView && !hasPlayedOnce && isMounted}
                muted={isMuted}
                onEnded={handleVideoEnd}
                playsinline
                controls={false}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                      controls: 0,
                      showinfo: 0,
                      iv_load_policy: 3,
                      fs: 0,
                      disablekb: 1,
                      playsinline: 1,
                      cc_load_policy: 0,
                      origin: typeof window !== 'undefined' ? window.location.origin : '',
                    },
                  },
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            loop={false}
            muted={isMuted}
            playsInline
            onEnded={handleVideoEnd}
            autoPlay={isInView && !hasPlayedOnce && isMounted}
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Suspense>
      
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