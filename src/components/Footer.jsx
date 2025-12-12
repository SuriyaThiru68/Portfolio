import React from 'react';
import footimg from './assests/footimg.png';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 text-center text-gray-500">
      <img src={footimg} alt="footer image" className="w-full" />
    </footer>
  );
};

export default Footer;
