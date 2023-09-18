import React from 'react';

const Items: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-28 mt-2">
      <p className="w-full sm:w-auto">Inicio</p>
      <p className="w-full sm:w-auto">Comprar por marca</p>
      <p className="w-full sm:w-auto">Comprar por mascota</p>
      <p className="w-full sm:w-auto">Nuestros servicios</p>
      <p className="w-full sm:w-auto">Promociones</p>
      <p className="w-full sm:w-auto">Nosotros</p>
    </div>
  );
};

export default Items;
