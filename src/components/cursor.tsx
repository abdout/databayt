'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CursorProps {
  isDesktop: boolean;
}

const Cursor: React.FC<CursorProps> = ({ isDesktop }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const onHover = () => {
    gsap.to(cursorRef.current, {
      scale: 0.5,
      duration: 0.3,
      ease: "power3.out"
    });
    gsap.to(followerRef.current, {
      scale: 3,
      duration: 0.3,
      ease: "power3.out"
    });
  };

  const onUnhover = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out"
    });
    gsap.to(followerRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out"
    });
  };

  useEffect(() => {
    if (!isDesktop || !cursorRef.current || !followerRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Show cursors
    cursor.classList.add('is-active');
    follower.classList.add('is-active');

    // Initial position to prevent flash
    const initPosition = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Position both at the center initially
      gsap.set(follower, { x: centerX - 16, y: centerY - 16 });
      gsap.set(cursor, { x: centerX - 8, y: centerY - 8 });
    };
    initPosition();

    const moveCursor = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Position the larger follower circle
      gsap.to(follower, {
        x: mouseX - 16,
        y: mouseY - 16,
        duration: 0.3,
        ease: "power3.out",
        overwrite: true
      });

      // Position the small cursor in the center of the follower
      gsap.to(cursor, {
        x: mouseX - 8,
        y: mouseY - 8,
        duration: 0.1,
        ease: "power3.out",
        overwrite: true
      });
    };

    document.addEventListener("mousemove", moveCursor);
    
    const links = document.querySelectorAll("a, button, .link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onHover);
      link.addEventListener("mouseleave", onUnhover);
    });

    return () => {
      cursor.classList.remove('is-active');
      follower.classList.remove('is-active');
      document.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onHover);
        link.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursorFollower" />
    </>
  );
};

export default Cursor;