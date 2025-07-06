'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import SectionHeading from "../atom/section-heading";
import { useLocale } from "@/hooks/use-locale";

export function Gallery () {
  const { t } = useLocale()

  return (
    <section className="gallery-section py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title={t('landing.gallery.title')} 
          description={t('landing.gallery.description')} 
          className="text-center mb-8"
        />
          
        <div className="flex justify-center mt-8 mb-12">
          <Link href="/gallery">
            <Button 
              variant='outline' 
              size='lg' 
              className="rounded-full px-8 py-3 text-base font-medium min-w-[140px] hover:scale-105 transition-transform"
            >
              {t('landing.gallery.button')}
            </Button>
          </Link>
        </div>

        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden bg-black/5 shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/story.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-4 end-4 rtl:end-auto rtl:start-4 text-white/90 text-sm font-medium bg-black/30 px-3 py-1 rounded backdrop-blur-sm">
            {t('landing.gallery.company')}
          </div>
        </div>
      </div>
    </section>
  );
}
