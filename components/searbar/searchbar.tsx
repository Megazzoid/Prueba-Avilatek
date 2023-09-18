import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="pt-2 relative mx-auto text-gray-600 w-1/5">
      <input
        className="border-2 border-[#C8C2BE] bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Buscador"
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <svg
          className="text-[#C8C2BE] h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;