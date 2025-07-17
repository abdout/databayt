"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import normalizeWheel from 'normalize-wheel';
import { clamp, interpolate } from 'gsap/all';
import { useRouter } from 'next/navigation';

import Pagination from './pagination';
import Item, { ItemRef } from './item';
import Cross from './cross';

interface WorkItem {
  image: string;
  slug: string;
  title?: string;
  [key: string]: any;
}

interface SliderProps {
  items: WorkItem[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const [x, setX] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const router = useRouter();
  
  const sliderItemsRef = useRef<(ItemRef | null)[]>([]);
  const dragStartRef = useRef(0);
  const dragXStartRef = useRef(0);
  const triggerIndexRef = useRef<number | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const setPosition = useCallback((position: number) => {
    if (!maxScroll) {
      calcState();
    }
    setX(prev => clamp(maxScroll * -1, 0, prev + position * -1));
  }, [maxScroll]);

  const calcState = useCallback(() => {
    sliderItemsRef.current.forEach(item => item?.calcState());
    
    const validItems = sliderItemsRef.current.filter(item => item?.state);
    if (validItems.length === 0) return;
    
    const maxItem = validItems.reduce((a, b) => 
      (a?.state?.left || 0) > (b?.state?.left || 0) ? a : b
    );
    
    if (maxItem?.state) {
      const { left, width } = maxItem.state;
      setMaxScroll(x * -1 + (x * -1 + left - window.innerWidth / 2 + width / 2));
    }
  }, [x]);

  // Navigate to the corresponding work detail page when a thumbnail/item is clicked
  const navigateToWork = useCallback((index: number) => {
    const work = items[index];
    if (work && work.slug) {
      router.push(`/gallery/${work.slug}`);
    }
  }, [items, router]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.item');
    triggerIndexRef.current = target ? Number(target.getAttribute('data-index')) : null;
    
    setDragging(true);
    dragStartRef.current = e.clientX;
    dragXStartRef.current = x;
  }, [x]);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
    const distance = Math.abs(x - dragXStartRef.current);

    // Treat as a click if the drag distance is small
    if (distance <= 6 && triggerIndexRef.current !== null) {
      navigateToWork(triggerIndexRef.current);
    }
    
    triggerIndexRef.current = null;
    dragStartRef.current = 0;
  }, [x, navigateToWork]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging) return;
    
    const distance = dragStartRef.current - e.clientX - (dragXStartRef.current - x);
    setPosition(distance * 2);
  }, [dragging, x, setPosition]);

  const handleWheel = useCallback((e: WheelEvent) => {
    const normalized = normalizeWheel(e);
    setPosition(normalized.pixelY);
  }, [setPosition]);

  const handleResize = useCallback(() => {
    setX(0);
    calcState();
  }, [calcState]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!maxScroll) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      
      const position = Number(interpolate(positionX, x, 0.08).toFixed(2));
      
      if (position !== positionX) {
        setPositionX(position);
        
        const validItems = sliderItemsRef.current.filter(item => item);
        if (validItems.length > 0) {
          const closest = validItems
            .map(item => item!.progress)
            .reduce((a, b) => Math.abs(b - 0) < Math.abs(a - 0) ? b : a);
          
          const newActiveIndex = validItems.findIndex(item => item!.progress === closest);
          if (newActiveIndex !== -1) {
            setActiveIndex(newActiveIndex);
          }
        }
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animationIdRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [positionX, x, maxScroll]);

  // Event listeners
  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove, handleWheel, handleResize]);

  // Initial setup
  useEffect(() => {
    setPosition(0);
  }, [setPosition]);

  return (
    <div >
      <Cross />
      
      <div className={`flex items-center  h-screen ${dragging ? 'pointer-events-none' : ''}`}>
        <div
          className="flex items-center justify-start w-full space-x-7 pl-[50vw] select-none"
          style={{ transform: `translateX(calc(${positionX}px + -9vw))` }}
        >
          {items.map((item, index) => (
            <Item
              key={item.image}
              ref={(el: ItemRef | null) => { sliderItemsRef.current[index] = el }}
              item={item}
              index={index}
              x={positionX}
            />
          ))}
        </div>
      </div>
      
      <Pagination count={items.length} active={activeIndex} />
    </div>
  );
};

export default Slider; 