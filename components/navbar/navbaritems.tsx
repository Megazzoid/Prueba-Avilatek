import Link from 'next/link';
import React from 'react';

const Items: React.FC = () => (
  <div className="flex flex-col sm:grid sm:grid-cols-6 gap-4 justify-center mt-2">
    <Link href="/">
      <p className=" sm:w-auto text-left ml-5 sm:text-center overflow-hidden">
        Inicio
      </p>
    </Link>

    <Link href="#" as="#brands">
      <p className=" sm:w-auto text-left ml-5 sm:text-center overflow-hidden">
        Comprar por marca
      </p>
    </Link>

    <Link href="#" as="#categories">
      <p className=" sm:w-auto text-left ml-5 sm:text-center overflow-hidden">
        Comprar por mascota
      </p>
    </Link>

    <Link href="#" as="#services">
      <p className=" sm:w-auto text-left ml-5 sm:text-center overflow-hidden">
        Nuestros servicios
      </p>
    </Link>

    <Link href="#" as="#popular">
      <p className=" sm:w-auto text-left ml-5 sm:text-center overflow-hidden">
        Promociones
      </p>
    </Link>

    <Link href="#" as="#footer">
      <p className=" sm:w-auto text-left ml-5 sm:text-center overflow-hidden">
        Nosotros
      </p>
    </Link>
  </div>
);

export default Items;
