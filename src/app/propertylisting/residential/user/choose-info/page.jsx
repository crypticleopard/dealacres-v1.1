'use client';
import { useState } from 'react';
import Image from 'next/image'
import Button from '@/components/propertyListing/Button/Button';
import Link from 'next/link';


const Info = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const getDynamicLink = () => {
        
        switch (selectedOption) {
          case 'owner':
            return 'owner/location-details';
          case 'agent':
            return 'agent/agent-details';
          case 'builder':
            return 'builder/location-details';
          default:
            return '/choose-info';
        }
      };

    return (
        <section className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>
            
            <div className='h-[58vh] md:w-[450px] md:mt-20 rounded-xl px-5 border-t-4 border-r-2 border-l-2 overflow-hidden border-[#dcf0fd] border-b-4'>
      <h1 className="font-medium md:font-bold md:text-2xl text-xl mt-10">
        To Continue Please let us Know what you are?
      </h1>
      <div className='flex flex-row items-center justify-between my-10'>
                    <Button heading={'An Owner'} onClick={() => handleOptionSelect('owner')} hashClick={true} isActive={selectedOption === 'owner'} />
                    <Button heading={'A Agent'} onClick={() => handleOptionSelect('agent')} hashClick={true} isActive={selectedOption === 'agent'} />
                    <Button heading={'A Builder'} onClick={() => handleOptionSelect('builder')} hashClick={true} isActive={selectedOption === 'builder'} />
                </div>
      <p className='w-[85%] text-xl mb-8'>Please choose correctly, if you want to change in the future, it done through profile section</p>
      <Link href={getDynamicLink()}>
        <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white   hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600' >Continue</button>
      </Link>
    </div>

            <div className='h-full w-[400px] rounded-xl bg-[#c9e0ee] p-4 flex flex-col items-center'>   
                    <h1 className="text-xl mb-4 text-center mt-10">
                    This information creates a transparency and build trust with buyers/tenants</h1>
                <Image src={'/propertyListing/assets/agent.png'} alt='authentication' height={180} width={180} className='mt-3 mb-10' />
                <h1 className='font-bold text-xl'>Need Help?</h1>
                <p className='text-lg'>You Can Email Us</p>
                <p className='text-lg text-blue-600 mb-12'>Contact@dealacres.com</p>
            </div>
        </section>
    )
}

export default Info