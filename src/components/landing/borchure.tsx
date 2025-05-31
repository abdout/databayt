import Link from "next/link";
import { Button } from "../ui/button";
import SectionHeading from "../atom/section-heading";

export function Gallery () {
  return (
    <section className="py-16 items-center justify-center">
      <SectionHeading title="Gallery" description="Explore our portfolio showcasing innovative business automation solutions, custom software development, and successful digital transformation projects that have helped companies streamline their operations and boost productivity." />
        

          <Link
            href="/gallery"
           
          >
            <Button variant='outline' size='lg' className="rounded-full ">
            Gallery
            </Button>
          </Link>

          <div className="mt-10 relative aspect-video w-full max-w-5xl mx-auto rounded-sm overflow-hidden bg-black/5">
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
            <div className="absolute bottom-4 right-4 text-background text-sm">
              company
            </div>
          </div>
    </section>
  );
}
