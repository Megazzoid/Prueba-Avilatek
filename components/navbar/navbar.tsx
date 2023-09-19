import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Twitter from '../../assets/svg/twitter';
import Instagram from '../../assets/svg/instagram';
import MapIcon from '../../assets/svg/map';
import DropdownMenu from '../dropdowns/dropdownmenu';
import Facebook from '../../assets/svg/facebook';
import Maxilogo from '../../assets/img/maxilogo.png';
import SearchBar from '../searbar/searchbar';
import DefaultUser from '../../assets/svg/defaultuser';
import ShoppingCar from '../../assets/svg/shoppingcart';
import Items from './navbaritems';
import PetIcon from '../../assets/svg/pet';

const Navbar = () => {
  // Define an array for the DropdownMenu
  const menuItems = [
    { link: '/home', text: 'Home' },
    { link: '/about', text: 'About' },
    { link: '/contact', text: 'Contact' },
  ];

  return (
    <div className="navbar-container flex-col w-full">
      {/* Top section of the navbar with social media links and dropdown menu */}
      <div className="bg-[#E2081E] h-8 flex justify-end items-center">
        <div className="mr-2">
          <MapIcon color="white" />
        </div>
        <DropdownMenu
          title="Bello Monte"
          items={menuItems}
          backgroundColor="#E2081E"
          textColor="#F8F5F3"
        />
        <div className="ml-2 mr-2 ">
          <Link href="https://www.instagram.com/tiendasmaxipet/?hl=es">
            <Instagram color="white" />
          </Link>
        </div>
        <div className="ml-2 mr-2">
          <Link href="https://twitter.com/TiendasMaxiPet">
            <Twitter color="white" />
          </Link>
        </div>
        <div className="ml-2 mr-20">
          <Link href="https://www.facebook.com/tiendasmaxipet/?locale=es_LA">
            <Facebook color="white" />
          </Link>
        </div>
      </div>

      {/* Main section of the navbar */}
      <div className="bg-[#FFFEFE] flex flex-wrap justify-between items-center mt-2 px-4">
        <div className=" mb-2 flex-shrink-0">
          <Image src={Maxilogo} alt="Maxi Logo WOOOF" className="w-44 h-11" />
        </div>
        <div className="hidden md:flex md:flex-grow mb-2 md:items-center md:ml-auto">
          <SearchBar />
        </div>
        <div className="flex flex-shrink-0 items-center space-x-2 ">
          <MapIcon color="#333333" />
          <PetIcon />
          <DefaultUser />
          <ShoppingCar />
        </div>
      </div>

      {/* Bottom section of the navbar with additional items */}
      <div className="bg-[#FFFEFE]">
        <Items />
      </div>
    </div>
  );
};

export default Navbar;
