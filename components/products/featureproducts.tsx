import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import catimg from '../../assets/img/catimg.png';
import FeatureCard from '../cards/featurecard';
import imgbanner from '../../assets/img/imgbanner2.png';
import imgbanner2 from '../../assets/img/imgbanner3.png';

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
  {
    title: '1st Choice Puppy Chiot',
    price: '9.99',
    rating: '3',
  },
];

const FeatureProducts = () => {
  const [hideCatImage, setHideCatImage] = useState(false);

  useEffect(() => {
    // Función para determinar si se debe ocultar la imagen del gato
    const handleWindowResize = () => {
      if (window.innerWidth < 900) {
        setHideCatImage(true);
      } else {
        setHideCatImage(false);
      }
    };

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleWindowResize);

    // Llamar a la función inicialmente para configurar el estado
    handleWindowResize();

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className={`navbar-container mt-10 flex-col w-full relative `}>
        <h3 className="text-[#867D77] text-xs sm:text-base ml-20">
          Lorem ipsum dolor sit amet.
        </h3>
        <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold ml-20">
          PRODUCTOS DESTACADOS
        </h2>

        <div className="flex flex-row">
          {!hideCatImage && (
            <div className="w-2/5 ml-10 flex justify-center">
              <Image
                src={catimg}
                alt="cat"
                width={440}
                height={708}
                className="mt-5 "
              />
            </div>
          )}

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
        </div>

        <div className="w-full flex flex-row justify-center mt-32">
          <Image
            src={imgbanner2}
            alt="cat"
            style={{ width: '40%', height: 'auto' }}
          />
          <Image
            src={imgbanner}
            alt="cat"
            style={{ width: '40%', height: 'auto' }}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
