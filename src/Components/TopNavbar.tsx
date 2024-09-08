
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const TopNavbar = () => {
  return (
    <>
      <div className="text-white bg-gray-800">
        <div className="container px-4 py-5 mx-auto text-sm">
          <div className="flex flex-col items-center justify-end space-y-2 md:flex-row md:items-start md:space-y-0 md:space-x-3">
            <div className="flex items-center space-x-2">
              <GoLocation size={19} className='text-orange-500'/>
              <span className='text-[17px]'>Sydney, Australia</span>
            </div>
            <div className="flex items-center space-x-2">
              <AiFillPhone size={19} className='text-orange-500'/>
              <span className='text-[17px]'>0468328227</span>
            </div>
            <div className="flex items-center space-x-2">
              <AiOutlineClockCircle size={19} className='text-orange-500'/>
              <span className='text-[17px]'>Mon - Fri: 9:00am - 5:00pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <AiOutlineClockCircle size={19} className='text-orange-500'/>
              <span className='text-[17px]'>Weekends: Appointments Only</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
