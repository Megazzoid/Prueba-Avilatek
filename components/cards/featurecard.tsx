import React from 'react';
import catfood from '../../assets/img/catfood.png';
import Image from 'next/image';
import DogPaw from '../../assets/svg/dogpaw';

interface FeatureCardProps {
  title: string;
  price: string;
  rating: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, price, rating }) => {
  const ratingNumber = parseInt(rating);

  const renderDogPaws = (count: number) => {
    const dogPaws = [];
    for (let i = 0; i < count; i++) {
      dogPaws.push(<DogPaw isFill={true} key={i} />);
    }
    for (let i = count; i < 5; i++) {
      dogPaws.push(<DogPaw isFill={false} key={i} />);
    }
    return dogPaws;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <Image
            src={catfood}
            alt={title}
            width={144}
            height={200}
            className="relative mt-5 z-2"
          />

          <h2 className="mt-2 text-[#333333] font-medium text-center">
            {title}
          </h2>
          <div className="flex gap-2 justify-start">
            {renderDogPaws(ratingNumber)}
          </div>
          <h2 className="mt-2 text-[#333333] text-left">${price}</h2>

          <button className="bg-[#E2081E]  text-[#FEFEFE] mt-2 pl-6 pr-6 text-sm py-1 px-4 rounded inline-flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M0.25 8.08279e-06C0.111925 8.08279e-06 0 0.111937 0 0.250008C0 0.388079 0.111925 0.500008 0.25 0.500008H1.79687L3.11327 6.71877C3.14521 6.8724 3.24784 7.00164 3.375 7.00002H9.625C9.75708 7.00189 9.87856 6.88212 9.87856 6.75002C9.87856 6.61793 9.75708 6.49815 9.625 6.50002H3.57812L3.36719 5.50002H10.125C10.2369 5.49877 10.3427 5.41393 10.3672 5.3047L11.2422 1.5547C11.2747 1.40961 11.1487 1.25108 11 1.25002H2.46875L2.2461 0.195321C2.22132 0.0848231 2.11324 -0.000958167 2 8.08279e-06H0.25ZM2.57422 1.75002H4.78906L5.01953 3.12501H2.86719L2.57422 1.75002ZM5.29297 1.75002H7.95703L7.72656 3.12501H5.52344L5.29297 1.75002ZM8.46094 1.75002H10.6875L10.3672 3.12501H8.23047L8.46094 1.75002ZM2.97265 3.62501H5.10156L5.33203 5.00002H3.26172L2.97265 3.62501ZM5.60938 3.62501H7.64063L7.41406 5.00002H5.83594L5.60938 3.62501ZM8.14844 3.62501H10.25L9.92577 5.00002H7.91797L8.14844 3.62501ZM4.75 7.75C4.13165 7.75 3.625 8.25664 3.625 8.875C3.625 9.49336 4.13165 10 4.75 10C5.36836 10 5.875 9.49336 5.875 8.875C5.875 8.25664 5.36836 7.75 4.75 7.75ZM8.25 7.75C7.63165 7.75 7.125 8.25664 7.125 8.875C7.125 9.49336 7.63165 10 8.25 10C8.86836 10 9.375 9.49336 9.375 8.875C9.375 8.25664 8.86836 7.75 8.25 7.75ZM4.75 8.25C5.09814 8.25 5.375 8.52686 5.375 8.875C5.375 9.22314 5.09814 9.5 4.75 9.5C4.40188 9.5 4.125 9.22314 4.125 8.875C4.125 8.52686 4.40188 8.25 4.75 8.25ZM8.25 8.25C8.59814 8.25 8.875 8.52686 8.875 8.875C8.875 9.22314 8.59814 9.5 8.25 9.5C7.90188 9.5 7.625 9.22314 7.625 8.875C7.625 8.52686 7.90188 8.25 8.25 8.25Z"
                fill="#FEFEFE"
              />
            </svg>

            <span className="text-xs">Agregar</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
