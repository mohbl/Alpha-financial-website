import React from 'react';
import { FaUserTie } from 'react-icons/fa'; 
import founderImg from '../assets/founder.jpg'; 

const OurFounder: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container flex flex-col items-center mx-auto text-center">
        <FaUserTie className="mb-6 text-6xl text-orange-500" />
        <h2 className="mb-6 text-4xl font-bold text-gray-900">Meet Our Founder</h2>
        <img
          src={founderImg}
          alt="Founder Mr. Pawan Punjabi"
          className="w-48 h-48 mb-6 rounded-full shadow-lg shadow-orange-500"
        />
        <h3 className="mb-2 text-xl font-semibold text-gray-900">Mr. Pawan Punjabi</h3>
        <p className="text-gray-700">Founder</p>
      </div>
    </div>
  );
};

export default OurFounder;
