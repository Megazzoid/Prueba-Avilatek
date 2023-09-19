import React, { useEffect, useState } from 'react';
import CategoryCard from '../cards/categorycard';
import dog from '../../assets/img/dog.png';

const Categories = () => {
  // Use state to set the paddingClass value after the component has mounted

  return (
    <>
      <div className={`navbar-container w-5/6 mx-auto mt-10 mb-10 flex-col`}>
        <h3 className="text-[#867D77] text-xs sm:text-base ">
          Lorem ipsum dolor sit amet.
        </h3>
        <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold  ">
          UNA GRAN VARIEDAD DE CATEGORIAS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-10 ">
          <CategoryCard title="Perros" imgSrc="../../assets/img/dog.png" />
          <CategoryCard title="Gatos" imgSrc="../../assets/img/dog.png" />
          <CategoryCard title="Peces" imgSrc="../../assets/img/dog.png" />
          <CategoryCard title="Roedores" imgSrc={'../../assets/img/dog.png'} />
          <CategoryCard title="Reptiles" imgSrc={'../../assets/img/dog.png'} />
          <CategoryCard
            title="Placeholder"
            imgSrc={'../../assets/img/dog.png'}
          />
        </div>

        {/* Pasamos la imagen importada */}
      </div>
    </>
  );
};

export default Categories;
