'use client'

import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
const Page = () => {

    const [formData, setFormData] = useState({
        propertyDescription: '',
        totalFloors: '',
        propertyOnFloor: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const isFormValid = () => {
        const { propertyDescription, totalFloors, propertyOnFloor } = formData;
        return propertyDescription && totalFloors && propertyOnFloor;
    };


    return (
        <section className='mt-12 container mx-auto lg:w-4/5'>
            <Navigation />
            <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>

                <div className='h-full md:w-[450px]  rounded-xl p-5 custom-border'>
                    <h1 className="font-medium md:font-bold md:text-2xl text-xl mt-2">
                        Now, tell us about your property
                    </h1>
                    <p className='font-medium md:text-lg text-md ' >Describe Your Property</p>
                    <p className='w-[85%]'>Write Several Thing which can describe your propety appropriately </p>

                    <textarea
                        id="myTextArea"
                        name="propertyDescription"
                        rows={10}
                        cols={40}
                        className='my-6 custom-border-2 rounded-md'
                        onChange={handleInputChange}
                    />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Add Room Details
                    </h1>
                    <RoundedDiv width={35} height={35} size={5} />
                    <h1 className="font-medium md:font-bold  text-xl mt-2">
                        Number of Bathrooms
                    </h1>
                    <RoundedDiv width={35} height={35} size={5} />
                    <h1 className="font-medium md:font-bold  text-xl mt-2">
                        Number of Balconies
                    </h1>
                    <RoundedDiv width={35} height={35} size={5} />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Other Rooms
                    </h1>
                    <div className='w-[70%] grid grid-cols-2 gap-2 my-2'>
                        <div className='h-full bg-[#c9e0ee] py-2 px-2 rounded-md'>
                            Pooja Room
                        </div>
                        <div className='h-full  bg-[#c9e0ee] py-2 px-2 rounded-md'>
                            Study Room
                        </div>
                        <div className='h-full bg-[#c9e0ee] py-2 px-2 rounded-md'>
                            Servent Room
                        </div>
                        <div className='h-full bg-[#c9e0ee] py-2 px-2 rounded-md'>
                            Store Room
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Furnished
                    </h1>
                    <div className='w-[70%] flex flex-row gap-2 my-2'>
                        <div className='h-full bg-[#c9e0ee] py-2 px-2 rounded-lg'>
                            Fully Furnished
                        </div>
                        <div className='h-full  bg-[#c9e0ee] py-2 px-2 rounded-lg'>
                            Unfurnished
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Reserve Parking <span className='text-sm font-light'>(optional)</span>
                    </h1>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center gap-10'>
                            <p className='text-md'>Covered Parking</p>
                            <RoundedDiv width={25} height={25} size={2} />
                        </div>
                        <div className='flex flex-row items-center gap-14'>
                            <p className='text-md'>Open Parking</p>
                            <RoundedDiv width={25} height={25} size={2} />
                        </div>

                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Flooring Details
                    </h1>
                    <p className='text-md'>Total No of Floor</p>
                    <input
                        name='totalFloors'
                        className='custom-border py-4 px-2 my-2 rounded-xl'
                        placeholder='Total Floors'
                        onChange={handleInputChange}
                    />
                    <input
                        name='propertyOnFloor'
                        className='custom-border py-4 px-2 mb-2 rounded-xl'
                        placeholder='Property on Floor'
                        onChange={handleInputChange}
                    />
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Availability Status
                    </h1>
                    <div className='w-[80%] flex flex-row gap-2 my-2'>
                        <div className='h-full bg-[#c9e0ee] py-2 px-2 rounded-lg'>
                            Ready To Move
                        </div>
                        <div className='h-full  bg-[#c9e0ee] py-2 px-2 rounded-lg'>
                            Under Construction
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Age of Property
                    </h1>
                    <div className='flex flex-row  gap-2 mt-2'>
                        <button className='custom-border h-full px-2 rounded-lg'>0-1 years</button>
                        <button className='custom-border h-full px-2 rounded-lg'>1-5 years</button>
                        <button className='custom-border h-full px-2 rounded-lg'>5-10 years</button>
                        <button className='custom-border h-full px-2 rounded-lg'>10+ years</button>
                    </div>


                    <Link href={isFormValid() ? 'photos' : '#'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 
              ${!isFormValid() ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={!isFormValid()}
                        >
                            Continue
                        </button>
                    </Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='h-full w-[400px] rounded-xl bg-[#c9e0ee] p-4 flex flex-col items-center'>
                        <h1 className="text-xl mb-4 text-center mt-20">
                            Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others.</h1>
                        <Image src={'/propertyListing/assets/house.png'} alt='home' height={200} width={200} className='mt-3 mb-10' />
                        <h1 className='font-bold text-xl'>Need Help?</h1>
                        <p className='text-lg'>You Can Email Us</p>
                        <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
                    </div>
                    <div className='h-full w-[400px] rounded-xl bg-[#c9e0ee] p-4 flex flex-col items-center'>
                        <Image src={'/propertyListing/assets/smiley.png'} alt='smiley' height={100} width={100} className='mt-3 mb-2' />
                        <h1 className='text-2xl'>You are Almost There</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;