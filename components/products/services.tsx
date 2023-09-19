import React, { useEffect, useState } from 'react';
import CategoryCard from '../cards/categorycard';
import ServiceCard from '../cards/servicecard';

const Services = () => {
  // Use state to set the paddingClass value after the component has mounted
  const [paddingClass, setPaddingClass] = useState('');

  return (
    <>
      <div className={`navbar-container mt-10 mb-10 flex-col w-5/6 mx-auto `}>
        <h3 className="text-[#867D77] text-xs sm:text-base ">
          Lorem ipsum dolor sit amet.
        </h3>
        <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold  mr-5">
          Nuestros Servicios
        </h2>
        <div className="mt-5 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          <div className="flex-col align-items-center justify-items-center  text-center">
            <ServiceCard title="Peluqueria" imgSrc="../../assets/img/dog.png" />
            <p className="text-[#333333] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>

          <div className="flex-col align-items-center justify-items-center  text-center">
            <ServiceCard
              title="Odontologia"
              imgSrc="../../assets/img/dog.png"
            />
            <p className="text-[#333333] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>

          <div className="flex-col align-items-center justify-items-center  text-center">
            <ServiceCard
              title="Veterinario"
              imgSrc="../../assets/img/dog.png"
            />
            <p className="text-[#333333] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>

          <div className="flex-col align-items-center justify-items-center  text-center">
            <ServiceCard
              title="Entrenamiento"
              imgSrc="../../assets/img/dog.png"
            />
            <p className="text-[#333333] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>
          <div className="flex-col align-items-center justify-items-center  text-center">
            <ServiceCard
              title="Psicologia canina"
              imgSrc="../../assets/img/dog.png"
            />
            <p className="text-[#333333] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>

          <div className="flex-col align-items-center justify-items-center  text-center">
            <ServiceCard
              title="Fiesta de cumpleaños"
              imgSrc="../../assets/img/dog.png"
            />
            <p className="text-[#333333] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
