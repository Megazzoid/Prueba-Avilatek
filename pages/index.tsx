import React from 'react';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';
import Categories from '../components/categories/categories';
import FeatureProducts from '../components/products/featureproducts';
import PopularProducts from '../components/products/popularproducts';
import LatestsProducts from '../components/products/latestsproducts';
import Services from '../components/products/services';
import TopBrands from '../components/topbrands/topbrands';

function HomePage() {
  return (
    <div className="w-9/10 bg-white flex flex-col dark:bg-black">
      <Navbar />
      <Carousel />
      <Categories />
      <FeatureProducts />
      <PopularProducts />
      <LatestsProducts />
      <Services />
      <TopBrands />
    </div>
  );
}

export default HomePage;
