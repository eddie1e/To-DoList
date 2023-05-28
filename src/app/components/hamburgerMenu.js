'use client';

import React from 'react';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`flex flex-col justify-between w-6 h-4 cursor-pointer ${
        isOpen ? 'open' : ''
      } sm:hidden`}
      onClick={toggleMenu}
    >
      <div className="w-full h-0.5 bg-black"></div>
      <div className="w-full h-0.5 bg-black opacity-0"></div>
      <div className="w-full h-0.5 bg-black transform -translate-y-2 -rotate-45"></div>
    </div>
  );
};

export default HamburgerMenu;