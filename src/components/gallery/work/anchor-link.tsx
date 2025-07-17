"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollContext } from "./scroll-context";

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
  const { scrollTo } = useScrollContext();

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
    }
    if (scrollTo) {
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