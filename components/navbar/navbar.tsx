import React from 'react';
import Image from 'next/image';
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

const Navbar = () => {
  const menuItems = [
    { link: '/home', text: 'Home' },
    { link: '/about', text: 'About' },
    { link: '/contact', text: 'Contact' },
  ];

  return (
    <div className="navbar-container flex-col w-full">
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
          <Instagram color="white" />
        </div>
        <div className="ml-2 mr-2">
          <Twitter color="white" />
        </div>
        <div className="ml-2 mr-20">
          <Facebook color="white" />
        </div>
      </div>

      <div className="bg-[#FFFEFE] flex flex-wrap items-center mt-2 px-4">
        <div className="hidden md:block ml-12 mb-2 flex-shrink-0">
          <Image src={Maxilogo} alt="Maxi Logo WOOOF" className="w-44 h-11" />
        </div>
        <div className="flex-grow mb-2">
          <SearchBar />
        </div>
        <div className="flex flex-shrink-0 justify-end items-center space-x-2 mr-20">
          <MapIcon color="#333333" />
          <DefaultUser />
          <ShoppingCar />
        </div>
      </div>

      <div className="bg-[#FFFEFE]">
        <Items />
      </div>
    </div>
  );
};

export default Navbar;
