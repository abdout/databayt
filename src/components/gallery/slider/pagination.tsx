import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/all';

interface PaginationProps {
  count: number;
  active: number;
}

const Pagination: React.FC<PaginationProps> = ({ count, active }) => {
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paginationRef.current) {
      gsap.killTweensOf(paginationRef.current);
      gsap.to(paginationRef.current, {
        y: `-${24 * active}px`,
      });
    }
  }, [active]);

  return (
    <div className="fixed bottom-[4vh] left-1/2 -translate-x-1/2 text-white flex space-x-2 items-center">
      <div className="h-[24px] overflow-hidden">
        <div ref={paginationRef} className="flex flex-col">
          {Array.from({ length: count }, (_, i) => (
            <span key={`pagination-${i + 1}`}>{i + 1}</span>
          ))}
        </div>
      </div>
      <div className="w-3 h-px bg-white" />
      <div>{count}</div>
    </div>
  );
};

export default Pagination; 