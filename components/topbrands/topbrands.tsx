import Image from 'next/image';
import brand from '../../assets/img/brand.png';

const TopBrands = () => {
  return (
    <>
      <div className={`navbar-container mt-10 mb-10 flex-col w-5/6 mx-auto `}>
        <h3 className="text-[#867D77] text-xs sm:text-base ">
          Lorem ipsum dolor sit amet.
        </h3>
        <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold  mr-5">
          TRABAJAMOS CON LAS MEJORES MARCAS
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
          <h3 className="text-[#333333] text-lg mt-3 mb-3 font-semibold sm:text-base w-full sm:w-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
            viverra fames sed.
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-20 mt-5 w-full sm:w-auto">
            <Image
              src={brand}
              alt="Brand"
              width={120}
              height={80}
              className="relative z-2"
            />
            <Image
              src={brand}
              alt="Brand"
              width={120}
              height={80}
              className="relative z-2"
            />
            <Image
              src={brand}
              alt="Brand"
              width={120}
              height={80}
              className="relative z-2"
            />
            <Image
              src={brand}
              alt="Brand"
              width={120}
              height={80}
              className="relative z-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBrands;
