"use client";

import { useEffect, useState, createContext, useContext, RefObject } from "react";

// Context for active sections
const ActiveSectionContext = createContext<string>("");

/**
 * Hook to get active section
 */
export function useActiveSection(): string {
  return useContext(ActiveSectionContext);
}

/**
 * Service Table of Contents component
 */
export function TableOfContents({ 
  activeSection,
  overviewRef,
  featuresRef,
  technologyRef,
  pricingRef,
  faqRef,
  scrollToSection
}: { 
  activeSection: string;
  overviewRef: RefObject<HTMLDivElement | null>;
  featuresRef: RefObject<HTMLDivElement | null>;
  technologyRef: RefObject<HTMLDivElement | null>;
  pricingRef: RefObject<HTMLDivElement | null>;
  faqRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: RefObject<HTMLDivElement | null>) => void;
}) {
  const [tocState, setTocState] = useState<'initial' | 'fixed'>('initial');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Simple fixed position logic, since we don't have CTA anymore
      setTocState(scrollPosition > 220 ? 'fixed' : 'initial');
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check position on initial load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`hidden lg:block lg:w-40 xl:w-64 z-20 ${
        tocState === 'initial' 
          ? 'lg:absolute lg:right-4 lg:top-0'
          : 'fixed top-20 right-4 transition-all duration-300 ease-in-out'
      }`}
    >
      <ActiveSectionContext.Provider value={activeSection}>
        <div className="relative pl-1">
          {/* Thinner vertical line aligned with left border */}
          <div className="absolute left-[4px] top-8 bottom-0 w-[0.5px] bg-border/70"></div>
          
          <div className="flex gap-2 items-center pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text size-4"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg>
            <p className="text-sm pl-0 m-0">On This Page</p>
          </div>
          
          <nav className=" mt-2 max-h-[calc(100vh-180px)] overflow-y-auto pr-2">
            <div 
              className="relative" 
              onMouseEnter={() => setHoveredItem("overview")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button 
                onClick={() => scrollToSection(overviewRef)}
                className={`w-full text-sm text-left px-4 py-1.5 border-l-2 transition-all duration-300 ${
                  activeSection === "overview" 
                    ? "text-primary border-primary" 
                    : hoveredItem === "overview"
                      ? "border-primary/40 text-foreground/90"
                      : "border-transparent text-foreground/70 hover:text-foreground/90 hover:border-border"
                }`}
              >
                Overview
              </button>
            </div>
            
            <div 
              className="relative" 
              onMouseEnter={() => setHoveredItem("features")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button 
                onClick={() => scrollToSection(featuresRef)}
                className={`w-full text-sm text-left px-4 py-1.5 border-l-2 transition-all duration-300 ${
                  activeSection === "features" 
                    ? "text-primary border-primary" 
                    : hoveredItem === "features"
                      ? "border-primary/40 text-foreground/90"
                      : "border-transparent text-foreground/70 hover:text-foreground/90 hover:border-border"
                }`}
              >
                Features
              </button>
            </div>
            
            <div 
              className="relative" 
              onMouseEnter={() => setHoveredItem("technology")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button 
                onClick={() => scrollToSection(technologyRef)}
                className={`w-full text-sm text-left px-4 py-1.5 border-l-2 transition-all duration-300 ${
                  activeSection === "technology" 
                    ? "text-primary border-primary" 
                    : hoveredItem === "technology"
                      ? "border-primary/40 text-foreground/90"
                      : "border-transparent text-foreground/70 hover:text-foreground/90 hover:border-border"
                }`}
              >
                Technology
              </button>
            </div>
            
            <div 
              className="relative" 
              onMouseEnter={() => setHoveredItem("pricing")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button 
                onClick={() => scrollToSection(pricingRef)}
                className={`w-full text-sm text-left px-4 py-1.5 border-l-2 transition-all duration-300 ${
                  activeSection === "pricing" 
                    ? "text-primary border-primary" 
                    : hoveredItem === "pricing"
                      ? "border-primary/40 text-foreground/90"
                      : "border-transparent text-foreground/70 hover:text-foreground/90 hover:border-border"
                }`}
              >
                Pricing
              </button>
            </div>
            
            <div 
              className="relative" 
              onMouseEnter={() => setHoveredItem("faq")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button 
                onClick={() => scrollToSection(faqRef)}
                className={`w-full text-sm text-left px-4 py-1.5 border-l-2 transition-all duration-300 ${
                  activeSection === "faq" 
                    ? "text-primary border-primary" 
                    : hoveredItem === "faq"
                      ? "border-primary/40 text-foreground/90"
                      : "border-transparent text-foreground/70 hover:text-foreground/90 hover:border-border"
                }`}
              >
                FAQ
              </button>
            </div>
          </nav>
        </div>
      </ActiveSectionContext.Provider>
    </div>
  );
} 