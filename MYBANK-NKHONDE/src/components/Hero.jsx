import React, { useState, useEffect } from 'react';
import logo from '../images/nkhonde.webp';
import 'animate.css';
import './Hero.css';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const heroMessages = [
    "Welcome to MYBANK NKHONDE",
    "Empowering Communities",
    "Smart Savings & Loans",
    "Join Us Today!",
  ];

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % heroMessages.length);
    }, 3000); // Rotate hero messages every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero bg-gradient-to-r from-green-400 to-orange-500 text-white py-16 relative">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="absolute top-4 left-6 flex items-center">
          <img
            src={logo}
            alt="MYBANK NKHONDE Logo"
            className="h-16 w-16 mr-3 rounded-full shadow-lg animate__animated animate__fadeIn"
          />
          <a
            href="/"
            className="text-3xl font-bold text-white hover:text-red-300 transition"
          >
            MYBANK NKHONDE
          </a>
        </div>

        {/* Navigation Bar */}
        <nav className="absolute top-4 right-6 flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            {["Home", "Notifications", "Features", "Services", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="nav-link text-white hover:text-gray-300 transition animate__animated animate__fadeInUp animate__delay-1s"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
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
            isOpen ? "block animate__animated animate__slideInDown" : "hidden"
          } md:hidden bg-green-500 text-white absolute top-16 left-0 w-full shadow-lg`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Notifications", "Features", "Services", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="nav-link text-white hover:text-gray-300 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Content */}
        <div className="text-center mt-20">
          <h2
            className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown"
            key={textIndex} // Key changes to trigger animations
          >
            {heroMessages[textIndex]}
          </h2>
          <h3 className="text-2xl font-semibold mb-6 animate__animated animate__zoomIn animate__delay-2s">
            Transform your community with us.
          </h3>
          <p className="text-xl mb-8 animate__animated animate__fadeInUp animate__delay-3s">
            Experience seamless, secure, and easy financial management.
          </p>
          <a
            href="/dashboard"
            className="btn btn-light text-green-500 px-4 py-2 rounded-full text-lg hover:bg-gray-200 transition animate__animated animate__bounceIn"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
