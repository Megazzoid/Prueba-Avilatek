import React from 'react';
import Image from 'next/image';
import dog from '../../assets/img/dog.png';

interface ServiceCardProps {
  title: string;
  imgSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imgSrc }) => {
  return (
    <div className="flex-col align-items-center justify-items-center text-start">
      <Image
        src={dog}
        alt={title}
        width={120}
        height={120}
        className="relative mt-5 z-2"
      />
      <h2 className="mt-2 text-[#333333] text-2xl font-bold">{title}</h2>{' '}
    </div>
  );
};

export default ServiceCard;
