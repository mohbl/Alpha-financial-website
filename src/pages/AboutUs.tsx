import React from 'react';
import { motion } from 'framer-motion';
import aboutuss from '../assets/aboutus.jpg';
import family from '../assets/family.jpg';

const AboutUs: React.FC = () => {
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className='bg-gray-100 border-b-2 border-white'>
      <motion.div 
        className='flex-col justify-center py-10 text-center text-gray-900'
        initial="hidden"
        animate="visible"
        variants={slideLeft}
      >
        <h3 className='mb-3 text-5xl font-bold'>About Us</h3>
        <h2 className='text-4xl font-bold'>We believe you’re bright</h2>
      </motion.div>

      <div className="container flex flex-col gap-12 px-6 py-10 mx-auto md:flex-row">
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2 md:items-start"
          initial="hidden"
          animate="visible"
          variants={slideLeft}
        >
          <img
            src={aboutuss}
            alt="Our Mission"
            className="object-cover w-full h-64 mb-6 rounded-lg shadow-lg md:w-auto md:h-full shadow-orange-500"
          />
          <h2 className="mb-4 text-xl font-semibold">Our Mission</h2>
          <p className="text-base text-gray-700">
            Our mission is to provide our clients with tailored financial solutions that cater to their unique needs.
            We strive to make the process of securing a mortgage as straightforward and stress-free as possible,
            guiding you through every step with transparency and integrity.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={slideRight}
        >
          <h1 className="mb-4 text-xl font-semibold">Welcome to Alphaa Financial Solutions</h1>
          <p className="mb-4 text-base text-gray-700">
            At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.
          </p>

          <h2 className="mb-4 text-xl font-semibold">Our Story 🙂</h2>
          <p className="text-base text-gray-700">
            Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,
            Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years,
            we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.
          </p>
        </motion.div>
      </div>

      <div className='bg-gray-800'>
        <div className="container flex flex-col gap-20 p-12 mx-auto md:flex-row">
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={slideLeft}
            viewport={{ once: true, amount: 0.5 }} 
          >
            <img
              src={family}
              alt="Why Choose Us"
              className="object-cover w-full h-[500px] rounded-lg shadow-lg shadow-orange-500"
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={slideRight}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-4 text-lg font-bold text-orange-500">Why Choose Us</h2>
            <h3 className="mb-4 text-4xl font-semibold text-white">Our Expertise</h3>
            <p className="mb-8 text-base text-white">
              Expertise and Experience: With over 20 years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.
            </p>
            <p className="mb-8 text-base text-white">
              Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.
            </p>
            <p className="mb-8 text-base text-white">
              Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.
            </p>
            <p className="text-base text-white">
              Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
