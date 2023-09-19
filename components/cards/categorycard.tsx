import React from 'react';
import Dogbg from '../../assets/svg/dogbg';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  imgSrc: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imgSrc }) => {
  return (
    <>
      <div className="flex-col align-items-center justify-items-center h-32 w-32 text-center">
        <Dogbg /> {/* Cambia las clases CSS */}
        <Image
          src={imgSrc}
          alt={title}
          width={120}
          height={120}
          className="relative mt-5 z-2"
        />
        <h2 className="mt-2 mr-6 text-[#333333] font-bold">{title}</h2>{' '}
        {/* Aplica margen superior para separar la imagen del título */}
      </div>
    </>
  );
};

export default CategoryCard;
