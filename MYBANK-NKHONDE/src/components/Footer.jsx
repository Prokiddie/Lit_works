import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-orange-500 text-white py-4">
      <div className="container text-center">
        {/* Copyright */}
        <p className="mb-4">&copy; 2024 MYBANK NKHONDE. All Rights Reserved.</p>

        {/* Social Media Links */}
        <div className="my-3">
          <a href="https://facebook.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://linkedin.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>

        {/* Additional Links */}
        <div className="my-3">
          <a href="/terms" className="text-white mx-3">Terms of Service</a>
          <a href="/privacy" className="text-white mx-3">Privacy Policy</a>
        </div>

        {/* Contact Information */}
        <p className="my-3">Contact Us: <a href="mailto:info@mybanknkhonde.com" className="text-white">info@mybanknkhonde.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
