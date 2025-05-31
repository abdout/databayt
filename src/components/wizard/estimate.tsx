"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import { toast } from "sonner"

type EstimatesDisplayProps = {
  price: number
  time: number
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(value)
  const springValue = useSpring(motionValue, { stiffness: 200, damping: 30 })
  const roundedValue = useTransform(springValue, (latest: number) => Math.round(latest))

  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  return <motion.span>{roundedValue}</motion.span>
}

export const EstimatesDisplay = ({ price, time }: EstimatesDisplayProps) => {
  useEffect(() => {
    toast.dismiss()
    toast("", {
      description: (
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
          <p className=" text-muted-foreground text-[13px] sm:text-sm sm:leading-6">
          Estimated Price: <strong className="text-black font-extrabold text-lg">$<AnimatedNumber value={price} /></strong>
          </p>
            {/* <span className="text-sm font-medium text-gray-400">Estimated Price:</span>
            <span className="text-lg font-bold text-gray-100">
              $<AnimatedNumber value={price} />
            </span> */}
          </div>
          <div className="flex items-center justify-between">
          <p className=" text-muted-foreground text-[13px] sm:text-sm sm:leading-6">
          Estimated Time: <strong className="text-black font-extrabold text-lg"><AnimatedNumber value={time} /> d</strong>
          </p>
            {/* <span className="text-sm font-medium text-gray-400">Estimated Days:</span>
            <span className="text-lg font-bold text-gray-100">
              <AnimatedNumber value={time} />
            </span> */}
          </div>
        </div>
      ),
      duration: 4000,
    })
  }, [price, time])

  return null
}

