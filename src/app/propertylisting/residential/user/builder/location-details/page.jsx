'use client';
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    projectName: '',
    area: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    const { state, city, projectName, area } = formData;
    return state && city && projectName && area;
  };

  return (
    <section className='mt-8 container mx-auto lg:w-4/5'>
      <NavigationBroker />
      <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-[4rem]  container mx-auto my-8 overflow-auto'>
        <div className='h-full w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center'>
          <h1 className="text-lg text-center mt-8">
            An Accurate Location is the most essential as it helps you to connect the perfect buyer or tenant
          </h1>
          <Image src={'/propertyListing/assets/location.png'} alt='location' height={120} width={120} className='my-8' />
          <h1 className='font-bold text-xl'>Need Help?</h1>
          <p className='text-lg'>You Can Email Us</p>
          <p className='text-lg text-blue-600 mb-8'>Contact@dealacres.com</p>
        </div>
        <div className='h-fit md:w-[400px] md:mt-10 rounded-xl px-5 py-4 border-2 border-[#dcf0fd] shadow-md '>
          <h1 className="font-medium md:font-bold text-xl  mb-4">Your Property Location?</h1>
          {['state', 'city', 'projectName', 'area'].map((fieldName) => (
            <input
              key={fieldName}
              name={fieldName}
              placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
              type='text'
              className='py-1 px-2 rounded-lg w-full mb-2 custom-border-2'
              onChange={handleInputChange}
            />
          ))}
          <Link href={isFormValid() ? 'property-profile' : '#'}>
            <button
              disabled={!isFormValid()}
              className={`w-full rounded-md px-8 py-3 font-bold text-white mt-3 mb-1 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 
      ${!isFormValid() ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600'}`}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
