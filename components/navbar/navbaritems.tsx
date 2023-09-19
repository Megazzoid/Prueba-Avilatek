import React from 'react';

const Items: React.FC = () => (
  <div className="flex flex-col sm:grid sm:grid-cols-6 gap-4 justify-center mt-2">
    <p className="w-full sm:w-auto text-center">Inicio</p>
    <p className="w-full sm:w-auto text-center">Comprar por marca</p>
    <p className="w-full sm:w-auto text-center">Comprar por mascota</p>
    <p className="w-full sm:w-auto text-center">Nuestros servicios</p>
    <p className="w-full sm:w-auto text-center">Promociones</p>
    <p className="w-full sm:w-auto text-center">Nosotros</p>
  </div>
);

export default Items;
