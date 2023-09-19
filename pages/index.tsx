import React from 'react';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';
import Categories from '../components/categories/categories';
import FeatureProducts from '../components/products/featureproducts';
import PopularProducts from '../components/products/popularproducts';
import LatestsProducts from '../components/products/latestsproducts';

function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col dark:bg-black">
      <Navbar />
      <Carousel />
      <Categories />
      <FeatureProducts />
      <PopularProducts />
      <LatestsProducts />
    </div>
  );
}

export default HomePage;
