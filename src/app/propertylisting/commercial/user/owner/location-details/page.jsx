'use client';
import NavigationCOwner from '@/components/propertyListing/Navigation/NavigationCOwner';
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
    <section className='mt-12 container mx-auto lg:w-4/5'>

      <NavigationCOwner />

      <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>

        <div className='h-full w-[400px] rounded-xl bg-[#c9e2f3] p-4 flex flex-col items-center'>

          <h1 className="text-xl text-center mt-10">
            An Accurate Location is the most essential as it helps you to connect the perfect buyer or tenant</h1>

          <Image src={'/propertyListing/assets/location.png'} alt='location' height={150} width={150} className='my-16' />
          <h1 className='font-bold text-xl'>Need Help?</h1>
          <p className='text-lg'>You Can Email Us</p>
          <p className='text-lg text-blue-600 mb-10'>Contact@dealacres.com</p>
        </div>
        <div className='h-full md:w-[400px] md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4'>
          <h1 className="font-medium md:font-bold md:text-2xl text-xl  my-3">
            Your Property Location?</h1>
          {['state', 'city', 'projectName', 'area'].map((fieldName) => (
            <input
              key={fieldName}
              name={fieldName}
              placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
              type='text'
              className='py-4 px-2 rounded-lg w-full mb-2 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4'
              onChange={handleInputChange}
            />
          ))}

          <Link href={isFormValid() ? 'property-profile' : '#'}>
            <button
              disabled={!isFormValid()}
              className={`w-full rounded-md px-8 py-3 font-bold text-white my-3 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 
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
