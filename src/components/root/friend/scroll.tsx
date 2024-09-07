import Title from "@/components/atom/title";
import Card from "@/components/root/friend/card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function Home() {
  const images = [
    "/friend/الاحياء والتجديد.png",
    "/friend/حركة المستقبل.png",
    "/friend/جامعة الخرطوم.png",
    "/friend/249.png",
    "/friend/نورين.jpg",
    "/friend/الحركة الاسلامية.png",
    "/friend/تأسيس.png",
    "/friend/الميزاب.png",
    "/friend/الباحثين.png",
    "/friend/تنوير.jpg",
    "/friend/السكة.png",
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className="relative">
      <Title icon="ph:users-three" placeholder="أصدقاء الحركة" />
      <div className="md:py-8 overflow-hidden relative h-32 -mt-1 -mx-10 md:h-64 md:-mt-6 md:-mx-40">
        {/* Left gradient overlay */}
        <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-background/100 to-background/0 z-10 pointer-events-none" />
        {/* Right gradient overlay */}
        <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-background/100 to-background/0 z-10 pointer-events-none" />

        <motion.div
          className="absolute left-0 flex gap-6 md:gap-12 items-center h-full"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images, ...images].map((item, idx) => (
            <Card image={`${item}`} key={idx} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
