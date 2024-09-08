import React from 'react';
import { FaCode, FaPaintBrush, FaDatabase, FaMobileAlt, FaLaptop, FaCloud, FaChartLine, FaLock } from 'react-icons/fa'; 
import tall from '../assets/tall.jpg'
const services = [
  { title: 'Home Loans', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaCode size={50} /> },
  { title: 'First home buyer', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaPaintBrush size={50} /> },
  { title: 'Refinancing', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaDatabase size={50} /> },
  { title: 'Investment Property', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaMobileAlt size={50} /> },
  { title: 'Self Managed Super fundSMSF', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaLaptop size={50} /> },
  { title: 'Asset finance', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaCloud size={50} /> },
  { title: 'Personal loans', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaChartLine size={50} /> },
  { title: 'Expat Loans', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaLock size={50}/> },
  { title: 'Commercial/Business Loans', description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.', icon: <FaLaptop size={50} /> }
];

const ServiceSection: React.FC = () => {
  return (
    <div className='bg-gray-100'> 
    <div className='flex-col justify-center text-center py-28'>
      <h3 className='mb-3 text-5xl font-semibold'>our services</h3>
    </div>
    
    <div className="container flex flex-row gap-6 mx-auto">
  <div className="w-full md:w-2/3">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2">
      {services.map((service, index) => (
        <div key={index} className="h-[450px] p-6 bg-white rounded-2xl shadow-lg shadow-orange-500">
          <div className="flex items-center justify-around mb-4 border-b-2 pb-7">
            <div className="mr-4 text-4xl text-orange-500">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="relative hidden w-1/3 overflow-hidden md:block">
    <img
      src={tall}
      alt="Big Picture"
      className="object-cover w-full h-full transition-transform duration-500 transform rounded-xl hover:scale-105"
    />
  </div>
</div>

    </div>
   
  );
};

export default ServiceSection;
