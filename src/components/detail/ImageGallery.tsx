/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex-1 flex flex-col gap-6">
      {/* Main Featured Image */}
      <div className="w-full aspect-[4/3] bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center p-8 group overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`${name} - View ${activeIndex + 1}`}
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.03] drop-shadow-2xl"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`aspect-square bg-surface-container-lowest overflow-hidden transition-all duration-300 ${
              activeIndex === idx
                ? 'border-2 border-on-background'
                : 'border border-outline-variant/50 hover:border-outline-variant'
            }`}
          >
            <img
              src={img}
              alt={`${name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
