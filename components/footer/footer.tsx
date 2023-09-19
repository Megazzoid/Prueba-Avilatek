import Link from 'next/link'; // Importing the Link component from Next.js
import AvilaIcon from '../../assets/svg/avila'; // Importing an SVG icon
import DogHouse from '../../assets/svg/doghouse'; // Importing an SVG icon
import Facebook from '../../assets/svg/facebook'; // Importing an SVG icon
import Instagram from '../../assets/svg/instagram'; // Importing an SVG icon
import TreeIcon from '../../assets/svg/tree'; // Importing an SVG icon
import Twitter from '../../assets/svg/twitter'; // Importing an SVG icon

const Footer = () => (
  <div className="footer-container flex-col " id="footer">
    <div className="flex flex-wrap h-88 w-4/5 mx-auto justify-center lg:justify-start">
      {/* Section 1: "Sobre nosotros" */}
      <div className="w-1/2 lg:w-1/4 p-4">
        <h1 className="text-2xl mb-3 text-[#E2081E] font-bold text-left pt-10">
          Sobre nosotros
        </h1>
        <p className="text-[#867D77] pt-2 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
          rhoncus id nunc, porta leo tempus facilisi.
        </p>
      </div>

      {/* Section 2: "Mi cuenta" */}
      <div className="w-1/2 lg:w-1/4 p-4">
        <h1 className="text-2xl mb-3 text-[#E2081E] font-bold text-left pt-10">
          Mi cuenta
        </h1>
        <div className="flex flex-col mx-auto text-left">
          <p className="text-[#867D77] mb-2">Información personal</p>
          <p className="text-[#867D77] mb-2">Direcciones</p>
          <p className="text-[#867D77] mb-2">Mascotas</p>
          <p className="text-[#867D77] mb-2">Órdenes</p>
          <p className="text-[#867D77] mb-2">Agenda</p>
        </div>
      </div>

      {/* Section : "Sobre nosotros" */}
      <div className="w-1/2 lg:w-1/4 p-4">
        <h1 className="text-2xl  mx-auto mb-3 text-[#E2081E] font-bold text-left pt-10">
          Sobre nosotros
        </h1>
        <div className="flex flex-col  mx-auto  text-left">
          <p className="text-[#867D77] mb-2">Formulario de contacto</p>
          <p className="text-[#867D77] mb-2">Preguntas frecuentes</p>
          <p className="text-[#867D77] mb-2">Términos y condiciones</p>
          <p className="text-[#867D77] mb-2">Política de privacidad</p>
        </div>
      </div>

      {/* Section : Contact Information */}
      <div className="w-1/2 lg:w-1/4 p-4">
        <h1 className="text-2xl text-[#E2081E] mb-3 font-bold text-left pt-10">
          Contact Information
        </h1>
        <div className="flex flex-col mx-auto text-left">
          <p className="text-[#867D77] mb-2" style={{ wordWrap: 'break-word' }}>
            Bello Monte, calle XXXX, local 1
          </p>
          <p className="text-[#867D77] mb-2" style={{ wordWrap: 'break-word' }}>
            (0212) 575 54 12
          </p>
          <p className="text-[#867D77] mb-2" style={{ wordWrap: 'break-word' }}>
            soporte@maxipet.com
          </p>
          <p className="text-[#867D77] mb-2" style={{ wordWrap: 'break-word' }}>
            Lunes a Viernes
          </p>
          <p className="text-[#867D77] mb-2" style={{ wordWrap: 'break-word' }}>
            9:00 a.m. - 5:00 p.m.
          </p>
          <div className="flex justify-start gap-4">
            <Link href="https://www.instagram.com/tiendasmaxipet/?hl=es">
              <Instagram color="#867D77" />
            </Link>
            <Link href="https://twitter.com/TiendasMaxiPet">
              <Twitter color="#867D77" />
            </Link>
            <Link href="https://www.facebook.com/tiendasmaxipet/?locale=es_LA">
              <Facebook color="#867D77" />
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Section : Additional Icons */}
    <div className="flex flex-row justify-between  w-3/5 mx-auto">
      <DogHouse />
      <TreeIcon />
    </div>

    {/* Section : Copyright and Credits */}
    <div className="h-9 bg-[#E2081E] flex flex-row justify-center">
      <p className="mt-2 text-[#FEFEFE] text-xs lg:text-base">
        Copyright © 2021 Maxi Pet.
        <span className="hidden lg:inline ml-2 mr-2">
          Todos los Derechos Reservados.
        </span>
        <span className="ml-2 lg:ml-0">Desarrollado por Avila Tek</span>
      </p>
      <AvilaIcon className="mt-3 ml-2" />
    </div>
  </div>
);

export default Footer;
