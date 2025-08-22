'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductCardImage({ src, alt, productName, className }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getEmojiForProduct = (name) => {
    if (name.includes('Headphones')) return '🎧';
    if (name.includes('Watch')) return '⌚';
    if (name.includes('Stand')) return '💻';
    if (name.includes('Mouse')) return '🖱️';
    return '📱';
  };

  return (
    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
      {src && src !== "/api/placeholder/300/200" && !imageError ? (
        <Image 
          src={src} 
          alt={alt}
          className={className}
          width={300}
          height={300}
          onError={handleImageError}
        />
      ) : (
        <div className="text-gray-400 dark:text-gray-500 text-6xl flex items-center justify-center">
          {getEmojiForProduct(productName)}
        </div>
      )}
    </div>
  );
}
