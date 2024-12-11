import React, { useState } from 'react';
import logo from '../images/nkhonde.webp';
import './Hero.css';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="hero bg-gradient-to-r from-green-400 to-orange-500 text-white py-16">
      <div className="container mx-auto">
        
        {/* Logo */}
        <div className="absolute top-4 left-6 flex items-center">
            <img src={logo} alt="MYBANK NKHONDE Logo" className="h-20 w-20 mr-3" />
            <a href="/" className="text-3xl font-bold text-black-100 hover:text-red-300 transition text-decoration none " >
              MYBANK NKHONDE
            </a>
          </div>
       {/* Navigation Bar */}
          <nav className="absolute top-4 right-6 flex items-center">
          
          

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8  text-3xl">
            <li>
              <a href="/" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-gray-300 transition">
                Features
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-gradient-to-r from-green-400 to-orange-500 text-white absolute top-16 left-0 w-full`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="/" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-gray-300 transition">
                Features
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hero Content */}
        <div className="text-center mt-10">
          <h2 className="text-5xl font-bold mb-4 animate-bounce">
            Welcome to MYBANK NKHONDE
          </h2>
          <h3 className="text-2xl font-semibold mb-6">
            Empowering Communities with Smart Savings & Loans
          </h3>
          <p className="text-xl mb-8 animate-pulse">
            Join us today and experience seamless, secure, and easy financial management.
          </p>
          <a
            className="bg-white text-green-500 px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
