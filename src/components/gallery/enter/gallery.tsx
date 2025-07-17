'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGalleryAnimation } from '@/components/gallery/enter/useAnimation';

interface ImageGalleryProps {
  onComplete?: () => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ onComplete }) => {
  const { initializeAnimations } = useGalleryAnimation(onComplete);

  useEffect(() => {
    // Initialize animations after component mounts
    const timer = setTimeout(initializeAnimations, 100);
    return () => clearTimeout(timer);
  }, [initializeAnimations]);

  return (
    <div id="app">
      <div id="grid">
        <div className="column one">
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/0.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/1.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/2.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/3.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        <div className="column two">
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/4.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/5.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/6.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/7.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        <div className="column three">
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/8.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/9.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content home">
              <Image src="/gallery/photos/home.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/10.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        <div className="column four">
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/11.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>  
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/12.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/13.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/14.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        <div className="column five">
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/15.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/16.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/17.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <Image src="/gallery/photos/18.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 