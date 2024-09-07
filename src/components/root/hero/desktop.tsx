import { Button } from "@/components/ui/button";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DesktopHero = () => {
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(scrollY.get() / window.innerHeight, 1);
      setScrollProgress(progress);
    };
    scrollY.onChange(handleScroll);
  }, [scrollY]);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-80px start', 'end end'],
  });

  // Adjusting scale, opacity, and other effects
  const scaleDown = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const circleScale = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.5, 0.7], ['50%', '0%']);
  const glow = useTransform(scrollYProgress, [0, 0.5], ['0px 0px 100px 30px rgba(255, 213, 0, 1)', 'none']);
  const circleOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const circlePositionX = useTransform(scrollYProgress, [0, 1], ['-20%', '-22.5%']);
  const circlePositionY = useTransform(scrollYProgress, [0.5, 1.4], ['-100%', '0%']);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.9, 0.35], [0.1, 5, 10]);
  const imagePositionX = useTransform(scrollYProgress, [0.2, 1], ['42%', '42%']);
  const imagePositionY = useTransform(scrollYProgress, [0.5, 1], ['40%', '22%']);

  // Expanding to full screen
  const fullSWidth = useTransform(scrollYProgress, [0.7, 1], ['20rem', '100vw']);
  const fullHeight = useTransform(scrollYProgress, [0.7, 1], ['20rem', '100vh']);
  const fullScreenPositionX = useTransform(scrollYProgress, [0.7, 1], ['40%', '0%']);
  const fullScreenPositionY = useTransform(scrollYProgress, [0.7, 1], ['20%', '0%']);
  const fullScreenBorderRadius = useTransform(scrollYProgress, [0.7, 1], ['0%', '0%']);
  
  return (
    <div ref={ref} className="h-[200vh] relative -mx-[8rem]">
      <div className="h-screen sticky top-0 overflow-hidden ">
        {/* DesktopHero Content */}
        <motion.div
          style={{
            display: scrollProgress >= 1 ? 'none' : 'flex',
            scale: scaleDown,
            opacity: opacity,
          }}
          className="flex flex-col justify-center space-y-4 h-full -mt-10 mx-[12rem]"
        >
          <p className="md:text-xl font-normal">المجتمع أولاً</p>
          <h1 className="text-lg md:text-4xl font-extrabold tracking-wide -mt-2">
            الحركة الوطنية للبناء والتنمية
          </h1>
          <p className="md:w-[50rem] text-sm md:text-xl font-extralight tracking-wide md:leading-[30px] pb-6">
            هي حركة إصلاح اجتماعي وسياسي شامل، تقيم رؤاها وتستقي قيمها من هدي <strong className="font-semibold">الدين</strong><br />
            وكريم شيم السودانيين، وتقوم على إرث المسلمين في السودان خاصة، وإرث شعب السودان<br />
            عامة، وتجربة الأمة المسلمة والأحرار في العالم،
          </p>
          <Link href="/register">
            <Button size='lg' className="bg-yellow-400 text-black md:w-44 md:h-12 text-lg hover:bg-[#ffd000]">يدك معانا</Button>
          </Link>
        </motion.div>

        <motion.div
          style={{
            scale: circleScale,
            borderRadius: borderRadius,
            boxShadow: glow,
            opacity: circleOpacity,
            position: 'absolute',
            left: circlePositionX,
            top: circlePositionY,
            
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="w-[100rem] h-[100rem] bg-yellow-400 -mt-10"
        >
          <motion.div
            style={{
              scale: imageScale,
              borderRadius: borderRadius,
              boxShadow: glow,
              opacity: circleOpacity,
              position: 'absolute',
              left: imagePositionX,
              top: imagePositionY,
              transform: 'translateX(-50%) translateY(-50%)',
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1.5,
            }}
            className="w-[20rem] h-[20rem]"
          >
            <Image src="/gallery/comm.png" alt="image" width={500} height={500} objectFit="cover" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesktopHero;
