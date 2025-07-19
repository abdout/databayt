"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "./use-scroll";

interface AnchorLinkProps {
  toSection: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const AnchorLink: React.FC<AnchorLinkProps> = ({ 
  toSection, 
  children, 
  className,
  onClick,
  ...rest 
}) => {
  const pathname = usePathname();
  const { scrollTo, isReady } = useScroll();

  useEffect(() => {
    if (pathname && pathname.includes('#')) {
      const hash = pathname.split('#')[1];
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [pathname]);

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event);
      return;
    }

    event.preventDefault();
    
    // Wait a bit if scroll is not ready yet, then try again
    if (!isReady) {
      setTimeout(() => {
        const element = document.querySelector(toSection);
        if (element) {
          // Use enhanced native scroll with proper offset for #works-images
          if (toSection === "#works-images") {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 100;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 200);
    } else {
      scrollTo(event, toSection);
    }
  };

  return (
    <Link
      href={toSection}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}; 