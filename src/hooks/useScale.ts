import { useState, useEffect } from 'react';

export const useScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // 1414 (device width) + 64 (32px padding on each side)
      // 1072 (device height) + 64 (32px padding top/bottom)
      const targetWidth = 1478; 
      const targetHeight = 1136;
      
      const scaleValue = Math.min(
        window.innerWidth / targetWidth,
        window.innerHeight / targetHeight,
        1
      );
      setScale(scaleValue);
    };

    handleResize(); // Initial calculate
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return scale;
};
