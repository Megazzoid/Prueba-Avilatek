import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import catimg from '../../assets/img/catimg.png';
import FeatureCard from '../cards/featurecard';

const featureCardsData = [
  {
    title: '1st Choice Puppy Chiot',
    price: '9.99',
    rating: '3',
  },
  {
    title: '2nd Choice Puppy Chiot',
    price: '12.99',
    rating: '4',
  },
  {
    title: 'Premium Dog Food',
    price: '19.99',
    rating: '5',
  },
  {
    title: 'Healthy Cat Food',
    price: '14.99',
    rating: '4',
  },
  {
    title: 'Deluxe Cat Toy Set',
    price: '7.99',
    rating: '3',
  },
  {
    title: 'Pet Grooming Kit',
    price: '24.99',
    rating: '5',
  },
];

const LatestsProducts = () => {
  const [hideCatImage, setHideCatImage] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 900) {
        setHideCatImage(true);
      } else {
        setHideCatImage(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={`navbar-container mt-10 flex-col w-5/6 mx-auto relative `}>
      <h3 className="text-[#867D77] text-xs sm:text-base">
        Lorem ipsum dolor sit amet.
      </h3>
      <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold ">
        PRODUCTOS DESTACADOS
      </h2>

      <div className="flex flex-row">
        <div
          className={`w-full md:w-full grid grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-3 gap-2 `}
        >
          {featureCardsData.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              price={card.price}
              rating={card.rating}
            />
          ))}
        </div>

        {!hideCatImage && (
          <div className="w-2/5 ml-auto flex justify-center">
            <Image
              src={catimg}
              alt="cat"
              width={440}
              height={708}
              className="mt-5"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestsProducts;
