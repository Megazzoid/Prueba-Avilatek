import Image from 'next/image';
import FeatureCard from '../cards/featurecard';
import imgbanner from '../../assets/img/imgbanner1.png';

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
];

const PopularProducts = () => (
  <div
    className={`navbar-container mt-10 flex-col w-5/6 mx-auto relative `}
    id="popular"
  >
    <h3 className="text-[#867D77] text-xs sm:text-base ">
      Lorem ipsum dolor sit amet.
    </h3>
    <h2 className="text-[#E2081E] text-xl sm:text-2xl font-bold ">
      PRODUCTOS POPULARES
    </h2>

    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
      {featureCardsData.map((card, index) => (
        <FeatureCard
          key={index}
          title={card.title}
          price={card.price}
          rating={card.rating}
        />
      ))}
    </div>

    <div className="w-full flex flex-row justify-center mt-32">
      <Image
        src={imgbanner}
        alt="cat"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  </div>
);

export default PopularProducts;
