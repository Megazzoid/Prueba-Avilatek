import React, { useState } from 'react';
import Link from 'next/link';

type Item = {
  link: string;
  text: string;
};

type DropdownMenuProps = {
  title: string;
  items: Item[];
  backgroundColor: string;
  textColor: string;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  backgroundColor,
  textColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      style={{ transform: 'scale(1)', zIndex: 3 }}
      data-te-dropdown-ref
    >
      <button
        className={`flex items-center whitespace-nowrap bg-${backgroundColor} text-xs font-medium leading-normal text-neutral-50 transition duration-150 ease-in-out `}
        type="button"
        id="dropdownMenuButton"
        data-te-dropdown-toggle-ref
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        {title}
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default DropdownMenu;
