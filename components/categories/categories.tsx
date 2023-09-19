import React, { useEffect, useState } from 'react';
import CategoryCard from '../cards/categorycard';
import dog from '../../assets/img/dog.png';

const Categories = () => {
  // Use state to set the paddingClass value after the component has mounted
  const [paddingClass, setPaddingClass] = useState('');

  return (
    <>
      <div className={`navbar-container mt-10 mb-10 flex-col w-full `}>
        <h3 className="text-[#867D77] text-xs sm:text-base ml-20">
          Lorem ipsum dolor sit amet.
        </h3>
        <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold ml-20 mr-5">
          UNA GRAN VARIEDAD DE CATEGORIAS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-10 ml-20 mr-16">
          <CategoryCard title="Perros" imgSrc={dog} />
          <CategoryCard title="Gatos" imgSrc={dog} />
          <CategoryCard title="Peces" imgSrc={dog} />
          <CategoryCard title="Roedores" imgSrc={dog} />
          <CategoryCard title="Reptiles" imgSrc={dog} />
          <CategoryCard title="Placeholder" imgSrc={dog} />
        </div>

        {/* Pasamos la imagen importada */}
      </div>
    </>
  );
};

export default Categories;
