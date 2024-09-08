import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGitAlt, FaTwitter, FaTelegramPlane, FaWordpress, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="p-28 bg-gray-800 te16xt-white h-[600px]">
      <div className="container flex flex-col justify-between mx-auto text-white md:flex-row">
        <div className="mb-8 md:mb-20">
          <h2 className="text-2xl font-bold text-orange-400 mb-7">Quick Contact</h2>
          <p className="max-w-md mb-7">
            At Alphaa Financial Solutions, we believe in empowering your property dreams
            with our premium financial services.
          </p>
          <div className="flex items-center mb-4 font-semibold">
            <FaMapMarkerAlt className="mr-2 text-orange-400" size={20} />
            <span>Sydney, Australia</span>
          </div>
          <div className="flex items-center mb-4 font-semibold">
            <FaPhone className="mr-2 text-orange-400" size={20} />
            <span>0468328227</span>
          </div>
          <div className="flex items-center font-semibold">
            <FaEnvelope className="mr-2 text-orange-400" size={20} />
            <span>[Email address here]</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t-8 border-gray-900 md:flex-row">
        <div className="flex mb-4 space-x-4 md:mb-0">
          <FaGitAlt className="text-orange-400" size={24} />
          <FaTwitter className="text-orange-400" size={24} />
          <FaTelegramPlane className="text-orange-400" size={24} />
          <FaWordpress className="text-orange-400" size={24} />
          <FaWhatsapp className="text-orange-400" size={24} />
        </div>
        <div className="text-sm font-semibold text-white">
          2024 © All Rights Reserved | Developed with ❤️ by mohamed belhadj
        </div>
      </div>
    </footer>
  );
};

export default Footer;