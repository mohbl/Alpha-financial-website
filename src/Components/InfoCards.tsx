import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const InfoCards = () => {
  return (
    <section className="pt-10 pb-20 bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:gap-8">
          <motion.div
            className="flex-1 p-16 bg-white rounded-lg shadow-md shadow-orange-500"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.2 }} 
          >
            <h2 className="mb-4 text-3xl font-semibold">Our Story</h2>
            <p className="mb-4 text-gray-700">
              Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
            </p>
            <a href="#learn-more" className="self-start text-blue-500 hover:underline">
              Know More
            </a>
          </motion.div>

          <motion.div
            className="flex-1 p-16 bg-white rounded-lg shadow-md shadow-orange-500"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-4 text-3xl font-semibold">Our Approach</h2>
            <p className="mb-4 text-gray-700">
              At Alpha Financial Solutions, we take a personalized approach to financial planning. Our team of experts is dedicated to crafting strategies that align with your unique needs and aspirations.
            </p>
            <a href="#learn-more" className="self-start text-blue-500 hover:underline">
              Know More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
