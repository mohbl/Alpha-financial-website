import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, useAnimation } from 'framer-motion';
import pic1 from '../assets/slide1.jpg';
import pic2 from '../assets/slider1.jpg';

const images = [pic1, pic2, pic2];

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  useEffect(() => {
    controls.start({
      y: [100, 0],  
      opacity: [0, 1], 
      transition: { duration: 1 },
    });
  }, [currentSlide, controls]);

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[100vh]">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="p-4 text-center bg-opacity-50 rounded"
                animate={controls}
              >
                <h2 className="font-bold text-white text-7xl">
                  Empowering Financial Security for Everyone
                </h2>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: 'block', left: '10px' }}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
