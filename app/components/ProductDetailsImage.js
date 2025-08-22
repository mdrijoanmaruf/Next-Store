'use client';

import { useState } from 'react';

export default function ProductDetailsImage({ src, alt, productName, className }) {
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
    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
      {src && src !== "/api/placeholder/300/200" && !imageError ? (
        <img 
          src={src} 
          alt={alt}
          className={className}
          onError={handleImageError}
        />
      ) : (
        <div className="text-gray-400 dark:text-gray-500 text-9xl flex items-center justify-center">
          {getEmojiForProduct(productName)}
        </div>
      )}
    </div>
  );
}
