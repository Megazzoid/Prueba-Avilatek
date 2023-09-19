import Instagram from '../../assets/svg/instagram';
import Twitter from '../../assets/svg/twitter';

const Footer = () => {
  return (
    <div className="footer-container flex-col h-88 w-4/5 mx-auto">
      <div className="flex flex-wrap justify-center lg:justify-start">
        <div className="w-1/2 lg:w-1/4 p-4">
          <h1 className="text-2xl mb-3 text-[#E2081E] font-bold text-center pt-10">
            Sobre nosotros
          </h1>
          <p className="text-justify text-[#867D77] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
            molestie rhoncus id nunc, porta leo tempus facilisi.
          </p>
        </div>
        <div className="w-1/2 lg:w-1/4 p-4">
          <h1 className="text-2xl mb-3 text-[#E2081E] font-bold text-center pt-10">
            Mi cuenta
          </h1>

          <div className="flex flex-col mx-auto text-center">
            <p className="text-[#867D77] mb-2">Información personal</p>
            <p className="text-[#867D77] mb-2">Direcciones</p>
            <p className="text-[#867D77] mb-2">Mascotas</p>
            <p className="text-[#867D77] mb-2">Órdenes</p>
            <p className="text-[#867D77] mb-2">Agenda</p>
          </div>
        </div>

        <div className="w-1/2 lg:w-1/4 p-4">
          <h1 className="text-2xl  mx-auto mb-3 text-[#E2081E] font-bold text-center pt-10">
            Sobre nosotros
          </h1>
          <div className="flex flex-col  mx-auto  text-center">
            <p className="text-[#867D77] mb-2">Formulario de contacto</p>
            <p className="text-[#867D77] mb-2">Preguntas frecuentes</p>
            <p className="text-[#867D77] mb-2">Términos y condiciones</p>
            <p className="text-[#867D77] mb-2">Política de privacidad</p>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-4">
          <h1 className="text-2xl text-[#E2081E] mb-3 font-bold text-center pt-10">
            Sobre nosotros
          </h1>
          <div className="flex flex-col  mx-auto  text-center">
            <p className="text-[#867D77] mb-2">
              Bello Monte, calle XXXX, local 1
            </p>
            <p className="text-[#867D77] mb-2">(0212) 575 54 12</p>
            <p className="text-[#867D77] mb-2">soporte@maxipet.com</p>
            <p className="text-[#867D77] mb-2">Lunes a Viernes</p>
            <p className="text-[#867D77] mb-2">9:00 a.m. - 5:00 p.m.</p>
            <div className="flex justify-center gap-4">
              <Instagram color="#867D77" />
              <Twitter color="#867D77" />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
