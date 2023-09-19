import React, { useEffect, useState } from 'react';
import FeatureCard from '../cards/featurecard';

const featureCardsData = [
  {
    title: '1st Choice Puppy Chiot',
    price: '9.99',
    rating: '3',
  },
  {
    title: '1st Choice Puppy Chiot',
    price: '9.99',
    rating: '3',
  },
  {
    title: '1st Choice Puppy Chiot',
    price: '9.99',
    rating: '3',
  },
  {
    title: '1st Choice Puppy Chiot',
    price: '9.99',
    rating: '3',
  },
  {
    title: '1st Choice Puppy Chiot',
    price: '9.99',
    rating: '3',
  },
];

const PopularProducts = () => {
  return (
    <>
      <div className={`navbar-container mt-10 flex-col w-full relative `}>
        <h3 className="text-[#867D77] text-xs sm:text-base ml-20">
          Lorem ipsum dolor sit amet.
        </h3>
        <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold ml-20">
          PRODUCTOS DESTACADOS
        </h2>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ml-10">
          {featureCardsData.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              price={card.price}
              rating={card.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;