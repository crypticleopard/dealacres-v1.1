'use client'

import { useState } from 'react';


const Card = ({ index, selectedCity }) => {
  const imageUrl = '/office-image.jpg';

  return (
    <div key={index} className="relative">
      <div
        className="relative bg-cover bg-center w-full h-[10rem] rounded-lg hover:bg-blue-300"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        
        <div className="absolute h-[6.5rem] bottom-0 left-0 text-left text-xs px-2 text-black bg-white/70  w-full">
          <p className='font-bold text-xs'>DLF The Arbour</p>
          <p className="text-[10px]">3/4 BHK Apartment, Sector 57,{selectedCity}</p>
          <p className="font-bold">1.46 Cr *</p>
        </div>
      </div>
    </div>
  );
};

const MobileTopProject = () => {
    const [selectedCity, setSelectedCity] = useState('New Delhi');

  const cities = [
    'New Delhi',
    'Gurgaon',
    'Faridabad',
    'Noida',
    'Jaipur',
    'Chandigarh',
    'Mohali',
    'Gr. noida',
    'Dehradun',
    'Lucknow',
  ];

  const changeCards = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className='px-4'>
        <h2 className="font-bold mb-1 text-xl ">Top Projects</h2>
        <p className=' text-base mb-4 '>Explore the top projects in top cities</p>
    <div className='flex flex-row gap-4 overflow-auto mb-4 '>
         
              {cities.map((city) => (
                <div 
                  key={city}
                  className={`cursor-pointer mb-2 min-w-[150px] text-center py-1 font-semibold px-4 rounded-lg ${selectedCity === city
                      ? 'bg-blue-700 text-white'
                      : ' text-white bg-blue-300'
                    }`}
                  onClick={() => changeCards(city)}
                >
                  {city}
                </div>
              ))}
           
    </div>
    <div className="grid grid-cols-3 gap-2 ">
            {[...Array(3)].map((_, index) => (
              <Card key={index} index={index + 1} selectedCity={selectedCity} />
            ))}
          </div>
    </div>
  )
}

export default MobileTopProject