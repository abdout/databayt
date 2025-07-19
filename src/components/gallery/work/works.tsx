"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GeistSans } from "geist/font/sans";
import { anim, SliderAnim } from "./animations";
import { classNames } from "./utils";
import { HomeData } from "./type";

interface WorksProps {
  data: HomeData;
}

export const Works: React.FC<WorksProps> = ({ data }) => {
  const router = useRouter();

  const [[page, direction], setPage] = useState([0, 0]);
  const [activeWork, setActiveWork] = useState(data.worksList[0]);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [titleHover, setTitleHover] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const leftControlRef = useRef<HTMLHeadingElement>(null);
  const rightControlRef = useRef<HTMLHeadingElement>(null);

  const paginate = (newDirection: number) => {
    const newPage =
      (page + newDirection + data.worksList.length) % data.worksList.length;
    setPage([newPage, newDirection]);
    setActiveWork(data.worksList[newPage]);

    // Animate both icons together with relative rotation
    if (leftControlRef.current && rightControlRef.current) {
      gsap.to([leftControlRef.current, rightControlRef.current], {
        rotation: `+=${newDirection * 90}`,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    }
  };

  const paginateThumbnail = (index: number) => {
    if (isDragging) return; // Prevent click if dragging
    
    const newPage = (index + data.worksList.length) % data.worksList.length;
    const direction = index < page ? -1 : 1;
    setPage([newPage, direction]);
    setActiveWork(data.worksList[newPage]);

    // Animate both icons together with relative rotation
    if (leftControlRef.current && rightControlRef.current) {
      gsap.to([leftControlRef.current, rightControlRef.current], {
        rotation: `+=${direction * 90}`,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    
    // If dragged more than 50px, navigate to slider view
    const distance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    if (distance > 50) {
      window.location.href = '/slider';
    }
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < 500) return;

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        paginate(1);
      } else if (deltaY < 0) {
        paginate(-1);
      }
      setLastScrollTime(currentTime);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [lastScrollTime]);

  // Initialize GSAP for the controls
  useGSAP(() => {
    if (leftControlRef.current && rightControlRef.current) {
      gsap.set([leftControlRef.current, rightControlRef.current], {
        rotation: 0,
        transformOrigin: "center center",
      });
    }
  }, []);

  // Inject styles only on client side
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleId = 'works-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .home .works {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            background-color: #121214;
          }

          /* Hide scrollbar for the entire page when works component is active */
          .work-layout {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .work-layout::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }

          /* Hide scrollbar for the works component specifically */
          .works {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .works::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }

          /* Ensure body and html also hide scrollbars when in gallery mode */
          body.work-layout,
          html.work-layout {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          body.work-layout::-webkit-scrollbar,
          html.work-layout::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }

          .full-screen-work {
            user-select: none;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            will-change: transform;
          }

          .full-screen-work__image {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            transition: 1s cubic-bezier(0.08, 0.99, 0.39, 1);
            object-fit: cover;
            filter: brightness(0.6);
          }

          .full-screen-work::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 0;
            pointer-events: none;
          }

          .full-screen-work__image--hovering {
            scale: 1.03;
            filter: brightness(0.8);
          }

          .full-screen-work__content {
            position: fixed;
            z-index: 20;
            left: 50%;
            top: 50vh;
            transform: translate(-50%, -50%);
            width: 65vw;
            height: 4.5vw;
            pointer-events: none;
          }

          .full-screen-work__content .text {
            cursor: pointer;
            text-wrap: nowrap;
            user-select: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 30vw;
            text-align: center;
            text-decoration: none;
            pointer-events: auto;
            color: inherit !important;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
          }

          /* Override any gallery font for this specific text */
          .works .full-screen-work__content .text,
          .works .full-screen-work__content .text *,
          .works .full-screen-work__content .text h1 {
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
          }

          .full-screen-work__content .text:hover {
            color: inherit !important;
            opacity: 1 !important;
          }

          .full-screen-work__control {
            font-weight: 50;
            font-size: 6vw;
            cursor: pointer;
            user-select: none;
            margin: 0;
            padding: 0;
            border: none;
            background: transparent;
            color: inherit;
            position: absolute;
            top: 0;
            width: 6vw;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: none;
            transform-origin: center center;
            transition: transform 0.1s ease;
            pointer-events: auto;
          }

          .full-screen-work__control--left {
            left: 0;
          }

          .full-screen-work__control--right {
            right: 0;
          }

          .full-screen-work__control:active {
            transform: scale(0.95);
          }

          .title-number-indicator {
            position: absolute;
            top: 0.5vw;
            right: -1.0vw;
            color: inherit;
            font-size: 1.0vw;
            font-weight: 400;
            line-height: 1;
            transform-origin: center center;
            z-index: 30;
          }

          @media (max-width: 768px) {
            .full-screen-work__control {
              font-size: 10vw;
              width: 10vw;
              height: 100%;
            }
            
            .full-screen-work__content {
              width: 80vw;
              height: 8vw;
              top: 50vh;
            }
            
            .full-screen-work__content .text {
              width: 40vw;
            }

            .title-number-indicator {
              top: -1.8vw;
              right: -3.5vw;
              font-size: 2.5vw;
            }
          }

          .works-thumbnail {
            position: absolute;
            bottom: 2vw;
            right: 2vw;
            display: flex;
            gap: 0.5vw;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .works-thumbnail__image {
            width: 100%;
            height: 100%;
            filter: brightness(1.1);
            transition: 0.5s ease;
            transform-origin: opacity filter scale;
            object-fit: cover;
            cursor: pointer;
          }

          @media (hover: hover) {
            .works-thumbnail__image:hover {
              opacity: 0.5;
              scale: 1.1;
            }
          }

          .works-thumbnail__image-wrapper {
            aspect-ratio: 16/9;
            width: 4vw;
            overflow: hidden;
          }

          .works-thumbnail__image--active {
            filter: brightness(0.5);
            scale: 1.2 !important;
            opacity: 1 !important;
            cursor: default;
          }

          @media (max-width: 768px) {
            .works-thumbnail {
              bottom: 2vw;
              right: 2vw;
              gap: 1vw;
            }
            
            .works-thumbnail__image-wrapper {
              width: 8vw;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  return (
    <section className="works">
      <div className="works-list">
        <AnimatePresence mode="sync" initial={false} custom={direction}>
          <div className="full-screen-work__content">
            <motion.h1
              ref={leftControlRef}
              className="full-screen-work__control full-screen-work__control--left"
              onClick={() => paginate(-1)}
              style={{
                fontSize: '4vw',
                fontWeight: 30,
                width: '4vw',
                height: '4vw'
              }}
            >
              +
            </motion.h1>

            <Link href={`/gallery/${activeWork.slug}`} className={`text ${GeistSans.className}`}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <AnimatePresence mode="popLayout">
                  <motion.h1
                    {...anim(SliderAnim.text)}
                    key={activeWork.title}
                    onHoverStart={() => setTitleHover(true)}
                    onHoverEnd={() => setTitleHover(false)}
                    style={{
                      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                      fontSize: '3.5vw',
                      letterSpacing: '0.01em',
                      fontWeight: '600'
                    }}
                  >
                    {activeWork.title}
                  </motion.h1>
                </AnimatePresence>
                <AnimatePresence>
                  {titleHover && (
                    <motion.span
                      key="number-indicator"
                      className="title-number-indicator"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 0.5
                      }}
                    >
                      {String(page + 1).padStart(2, '0')}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            <motion.h1
              ref={rightControlRef}
              className="full-screen-work__control full-screen-work__control--right"
              onClick={() => paginate(1)}
              style={{
                fontSize: '4vw',
                fontWeight: 30,
                width: '4vw',
                height: '4vw'
              }}
            >
              +
            </motion.h1>
          </div>

          <motion.div
            className="full-screen-work"
            key={page}
            custom={direction}
            variants={SliderAnim.layer as any}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <img
              src={activeWork.image}
              alt="full-screen-work"
              className="full-screen-work__imag"
            />
            
          </motion.div>
        </AnimatePresence>
        <ul className="works-thumbnail">
          {data.worksList.map((currW, i) => (
            <li key={i} className="works-thumbnail__image-wrapper">
              <motion.img
                src={currW.image}
                alt="thumbnail"
                className={classNames("works-thumbnail__image", {
                  "works-thumbnail__image--active": page === i,
                })}
                onClick={() => paginateThumbnail(i)}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{ cursor: 'default' }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}; 