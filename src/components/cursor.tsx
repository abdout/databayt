'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface CursorProps {
  isDesktop: boolean;
}

const Cursor: React.FC<CursorProps> = ({ isDesktop }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isMarketingPage, setIsMarketingPage] = useState(false);

  const onHover = () => {
    if (cursorRef.current && followerRef.current) {
      cursorRef.current.classList.add('is-hovering');
      followerRef.current.classList.add('is-hovering');
    }
  };

  const onUnhover = () => {
    if (cursorRef.current && followerRef.current) {
      cursorRef.current.classList.remove('is-hovering');
      followerRef.current.classList.remove('is-hovering');
    }
  };

  useEffect(() => {
    // Check if we're on a marketing page
    const checkMarketingPage = () => {
      const marketingElement = document.querySelector('.marketing-layout');
      setIsMarketingPage(!!marketingElement);
    };

    // Initial check
    checkMarketingPage();

    // Set up a mutation observer to watch for changes
    const observer = new MutationObserver(checkMarketingPage);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDesktop || !isMarketingPage || !cursorRef.current || !followerRef.current) return;

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
    
    // Function to add event listeners to interactive elements
    const attachHoverListeners = () => {
      const links = document.querySelectorAll("a, button, .link, [role='button']");
      links.forEach((link) => {
        link.addEventListener("mouseenter", onHover);
        link.addEventListener("mouseleave", onUnhover);
      });
      return links;
    };

    let currentLinks = attachHoverListeners();

    // Re-scan for new elements periodically (for dynamic content)
    const interval = setInterval(() => {
      const newLinks = document.querySelectorAll("a, button, .link, [role='button']");
      if (newLinks.length !== currentLinks.length) {
        // Remove old listeners
        currentLinks.forEach((link) => {
          link.removeEventListener("mouseenter", onHover);
          link.removeEventListener("mouseleave", onUnhover);
        });
        // Add new listeners
        currentLinks = attachHoverListeners();
      }
    }, 2000);

    return () => {
      cursor.classList.remove('is-active');
      follower.classList.remove('is-active');
      cursor.classList.remove('is-hovering');
      follower.classList.remove('is-hovering');
      document.removeEventListener("mousemove", moveCursor);
      clearInterval(interval);
      currentLinks.forEach((link) => {
        link.removeEventListener("mouseenter", onHover);
        link.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, [isDesktop, isMarketingPage]);

  if (!isDesktop || !isMarketingPage) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursorFollower" />
    </>
  );
};

export default Cursor;