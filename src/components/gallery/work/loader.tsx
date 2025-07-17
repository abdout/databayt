"use client";

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LoaderProps } from './type';

const numbersAnim = (numbers: HTMLElement) => {
  const tl = gsap.timeline();

  tl.to(numbers, {
    textContent: "100",
    duration: 4,
    roundProps: "textContent",
    ease: 'none',
  });

  return tl;
};

const hideLoader = (loader: HTMLElement, numbers: HTMLElement) => {
  const tl = gsap.timeline();

  tl.to(loader, {
    height: 0,
    duration: 1,
    delay: .7,
    ease: "power4.inOut",
  }).to(numbers, {
    opacity: 0
  }, '<30%');

  return tl;
};

export const Loader: React.FC<LoaderProps> = ({ setLoaderFinished }) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoaderFinished(true),
    });

    if (loaderRef.current && counterRef.current) {
      tl.add(numbersAnim(counterRef.current));
      tl.add(hideLoader(loaderRef.current, counterRef.current));
    }
  });

  // Inject styles only on client side
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleId = 'loader-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .loader {
            position: fixed;
            inset: 0;
            z-index: 100;
            background-color: var(--c-white);
            cursor: wait;
          }

          .loader__counter {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--c-black);
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <span className="micro-text loader__counter" ref={counterRef}>00</span>
    </div>
  );
}; 