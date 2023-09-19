import Link from 'next/link';
import React from 'react';

const Items: React.FC = () => (
  <div className="flex flex-col sm:grid sm:grid-cols-6 gap-4 justify-center mt-2">
    <Link href="/">
      <p className="w-full sm:w-auto text-left ml-5 sm:text-center">Inicio</p>
    </Link>

    <Link href="#" as="#brands">
      <p className="w-full sm:w-auto text-left ml-5 sm:text-center">
        Comprar por marca
      </p>
    </Link>

    <Link href="#" as="#categories">
      <p className="w-full sm:w-auto text-left ml-5 sm:text-center">
        Comprar por mascota
      </p>
    </Link>

    <Link href="#" as="#services">
      <p className="w-full sm:w-auto text-left ml-5 sm:text-center">
        Nuestros servicios
      </p>
    </Link>

    <Link href="#" as="#popular">
      <p className="w-full sm:w-auto text-left ml-5 sm:text-center">
        Promociones
      </p>
    </Link>

    <Link href="#" as="#footer">
      <p className="w-full sm:w-auto text-left ml-5 sm:text-center">Nosotros</p>
    </Link>
  </div>
);

export default Items;
