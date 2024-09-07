import { ReactLenis } from "lenis/react";
import {
  motion,
  useAnimation,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Title from "@/components/atom/title";
import { Icon } from "@iconify/react/dist/iconify.js";

export const DesktopRecent = () => {
  return (
    <div className="">
         <Title icon="ph:camera-light" placeholder="معرض الصور"/>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <GoToGallery />
        <Hero />
       
      </ReactLenis>
    </div>
  );
};



const SECTION_HEIGHT = 3000;

const Hero = () => {
    const controls = useAnimation();
    const exitControls = useAnimation();
  
    useEffect(() => {
      controls.start("animate");
    }, [controls]);
  
    useEffect(() => {
      exitControls.start("exit");
    }, [exitControls]);
  return (
    <div
    dir="ltr"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full -mt-8"
    >
      <CenterImage />

      <ParallaxImages />

      



      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-background/0 to-background" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 2000],
    ["20%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 4000],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(/gallery/01.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/gallery/8.png"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/gallery/4.png"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
       src="/gallery/3.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
       src="/gallery/6.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
      <ParallaxImg
       src="/gallery/7.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
      
      <ParallaxImg
        src="/gallery/10.png"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
       src="/gallery/5.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/2"
      />
      <ParallaxImg
        src="/gallery/14.png"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
       src="/gallery/12.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
       
      
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }:{
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const GoToGallery = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.7, 0.75], [0, 1, 1, 0]);

  return (
    <motion.div
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
      style={{ opacity }}
    >
      <motion.button
        className="bg-yellow-400 font-semibold text-lg z-50 px-6 py-3 rounded-sm flex items-center gap-[0.5ch]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <h4>المعرض</h4>
        <Icon icon="material-symbols:arrow-back" width={20} height={20} className="" />
      </motion.button>
    </motion.div>
  );
};
