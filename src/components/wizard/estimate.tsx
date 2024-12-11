// components/EstimatesDisplay.tsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type EstimatesDisplayProps = {
  price: number;
  time: number;
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { stiffness: 200, damping: 30 });
  const roundedValue = useTransform(springValue, (latest: number) => Math.round(latest));

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return <motion.span>{roundedValue}</motion.span>;
};

export const EstimatesDisplay = ({ price, time }: EstimatesDisplayProps) => {
  return (
    <div className="absolute top-32">
      <div className="flex items-center justify-center w-[180px] space-x-10 rounded-lg bg-muted px-4 py-1.5 text-sm font-medium -mt-32 md:-mt-28">
          <h4 className="text-2xl font-bold">
            $
            <AnimatedNumber value={price} />
          </h4> 
          <h4 className="text-2xl font-bold">
            <AnimatedNumber value={time} /> d
          </h4>
      </div>
    </div>
  );
};
