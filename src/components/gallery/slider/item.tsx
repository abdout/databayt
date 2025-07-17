import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { interpolate } from 'gsap/all';

interface ItemProps {
  item: {
    image: string;
    [key: string]: any;
  };
  x: number;
  index: number;
}

export interface ItemRef {
  calcState: () => void;
  state: { left: number; width: number } | null;
  progress: number;
}

const Item = forwardRef<ItemRef, ItemProps>(({ item, x, index }, ref) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState<{ left: number; width: number } | null>(null);

  const calcState = () => {
    if (!elRef.current) return;
    
    const { left, width } = elRef.current.getBoundingClientRect();
    const newState = { left, width };
    setState(newState);
    calculateProgress(newState);
  };

  const calculateProgress = (currentState = state) => {
    if (!currentState) return;
    
    const xVal = currentState.left + x;
    const newProgress = interpolate(
      -1,
      1,
      (1 / window.innerWidth) * (xVal + currentState.width * 0.5)
    );
    setProgress(newProgress);
  };

  useEffect(() => {
    calcState();
  }, []);

  useEffect(() => {
    calculateProgress();
  }, [x, state]);

  useImperativeHandle(ref, () => ({
    calcState,
    state,
    progress,
  }));

  return (
    <div ref={elRef} className="item" data-index={index}>
      <div className="flex w-[18vw] h-[25.5vw] overflow-hidden">
        <img
          className="w-full h-full object-cover scale-[1.25]"
          style={{
            objectPosition: `${50 + 30 * progress}% 50%`,
          }}
          src={item.image}
          alt=""
        />
      </div>
    </div>
  );
});

Item.displayName = 'Item';

export default Item; 