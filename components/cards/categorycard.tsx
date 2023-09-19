import React from 'react';
import Image from 'next/image';
import Dogbg from '../../assets/svg/dogbg';
import dog from '../../assets/img/dog.png';

interface CategoryCardProps {
  title: string;
  imgSrc: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imgSrc }) => (
  <div className="flex-col align-items-center justify-items-center w-5/6 mx-auto text-start">
    <Dogbg />
    <Image
      src={dog}
      alt={title}
      width={130}
      height={130}
      className="relative mt-5"
    />
    <h2 className="mt-2 text-[#333333] font-bold">{title}</h2>{' '}
    {/* Aplica margen superior para separar la imagen del título */}
  </div>
);

export default CategoryCard;
