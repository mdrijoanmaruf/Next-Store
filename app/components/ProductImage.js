'use client';

import { useState } from 'react';

export default function ProductImage({ src, alt, className }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden">
      {src && src !== "/api/placeholder/300/200" && !imageError ? (
        <img 
          src={src} 
          alt={alt}
          className={className}
          onError={handleImageError}
        />
      ) : (
        <div className="text-gray-400 dark:text-gray-500 text-6xl">📱</div>
      )}
    </div>
  );
}
