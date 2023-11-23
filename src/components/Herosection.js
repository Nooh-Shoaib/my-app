
    import React, { useState, useEffect } from 'react';

    const images = [
      'https://sireprinting.com/frontend-theme/assets/images/Custom-Boxes-With-Logo-Banner-SirePrinting.webp',
      'https://sireprinting.com/frontend-theme/assets/images/CBD-Packaging-Boxes-Banner-SirePrinting.webp',
      'https://sireprinting.com/frontend-theme/assets/images/Custom-Stickers-Banner-SirePrinting.webp',
    ];
    const AutoImageSlider = () => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval (() => {
          setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          console.log(`Image changed ${currentImageIndex}`);
        },5000);
      
        return () => {
          clearInterval(interval);
        };
      }, []);
        return(
          <div className='w-full'>
            <div className='relative h-24 md:h-80 lg:h-96'>
              <img
              src={images[currentImageIndex]}
              alt={`Image${currentImageIndex + 1}`}
              className='w-full lg:h-96'
              />
            </div>
          </div>
        );
    };
    export default AutoImageSlider;