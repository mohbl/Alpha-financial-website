import React, { useState, useEffect } from 'react';
interface ImageSliderProps {
  images: string[];
  displayTime?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, displayTime = 10000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, displayTime);

    return () => clearInterval(interval);
  }, [images.length, displayTime]);

  return (
    <div className="image-slider">
      <div className="background-image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`background-image ${currentImageIndex === index ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="dot-navigation">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentImageIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
