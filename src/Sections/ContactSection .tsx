import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaTwitter, FaTelegram, FaWordpress, FaGithub } from 'react-icons/fa'; 
import contactImg from '../assets/contact.jpg'; 

const ContactSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container grid items-center grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mb-6 text-gray-700">Please feel free to ask if you have any further questions.</p>
          <div className="mb-6 space-y-4">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-orange-500" />
              <span>Sydney, Australia</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-orange-500" />
              <span>0468328227</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-2xl text-orange-500" />
              <span>Mon - Fri: 9:00am - 5:00pm</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-2xl text-orange-500" />
              <span>Weekend Appointments Only</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <FaGithub className="text-3xl text-orange-500" />
            <FaTwitter className="text-3xl text-orange-500" />
            <FaTelegram className="text-3xl text-orange-500" />
            <FaWordpress className="text-3xl text-orange-500" />
          </div>
        </div>
        <div>
          <img src={contactImg} alt="Contact Us" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
