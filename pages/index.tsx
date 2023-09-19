import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';
import Categories from '../components/categories/categories';
import FeatureProducts from '../components/products/featureproducts';

function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col dark:bg-black">
      <Navbar />
      <Carousel />
      <Categories />
      <FeatureProducts />
    </div>
  );
}

export default HomePage;
