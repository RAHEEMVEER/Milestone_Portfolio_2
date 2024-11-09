"use client";

import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-20 sticky top-0 bg-background1 flex justify-between items-center px-5 sm:px-10 lg:px-32">
      <h1 className="text-3xl font-bold text-white">Portfolio</h1>

      <div className="lg:hidden">
        <i
          className="bx bx-menu text-3xl text-textColor cursor-pointer"
          onClick={handleMenuToggle}
        ></i>
      </div>

      {/* Navbar */}
      <nav
        className={`${
          isMenuOpen
            ? "flex flex-col absolute top-0 left-0 w-full bg-background1 h-screen"
            : "hidden"
        } lg:flex lg:flex-row lg:justify-end lg:items-center lg:w-auto lg:h-auto lg:static transition-all duration-300 ease-in-out`}
      >
        <a
          href="#Home"
          className="text-lg text-mainColor inline-block py-4 px-6 transition duration-1000 hover:text-mainColor"
          onClick={handleMenuToggle}
        >
          Home
        </a>
        <a
          href="#About"
          className="text-lg text-mainColor inline-block py-4 px-6 transition duration-1000 hover:text-mainColor"
          onClick={handleMenuToggle}
        >
          About
        </a>
        <a
          href="#Portfolio"
          className="text-lg text-mainColor inline-block py-4 px-6 transition duration-1000 hover:text-mainColor"
          onClick={handleMenuToggle}
        >
          Portfolio
        </a>
        <a
          href="#Contact"
          className="text-lg text-mainColor inline-block py-4 px-6 transition duration-1000 hover:text-mainColor"
          onClick={handleMenuToggle}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
