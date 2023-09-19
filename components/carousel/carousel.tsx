import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import maxiImg from '../../assets/img/pet_image.jpg';
import maxiImg2 from '../../assets/img/pet_image2.jpg';
import maxiImg3 from '../../assets/img/pet_image3.jpg';
import maxiImg4 from '../../assets/img/pet_image4.jpg';

// Define an array of image paths.
const IMAGES = [maxiImg, maxiImg2, maxiImg3, maxiImg4];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Use useEffect to create an interval for automatic slide transitions.
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length
    );
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="relative w-full h-4/5 mx-auto "
      data-te-carousel-init
      data-te-ride="carousel"
    >
      {/* Render the slide indicators */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] transition-transform duration-[600ms] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={index}
            className={`mx-[3px] box-content h-[6px] w-[50px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
              index === activeIndex ? 'bg-red-500' : 'bg-gray-300'
            } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
              index !== IMAGES.length - 1 ? 'mr-5' : '' // Add 5px right margin to all but the last indicator
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      {/* Render the slides */}
      <div className="relative w-full overflow-hidden transition-transform duration-[600ms] after:clear-both after:block after:content-['']">
        {IMAGES.map((image, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full h-2/5 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
              index === activeIndex ? 'block' : 'hidden'
            } ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            data-te-carousel-active={index === activeIndex}
            data-te-carousel-item
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Render the image */}
            <Image
              src={image}
              className="block w-full h-full"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
