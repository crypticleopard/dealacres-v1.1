'use client'

import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
const Page = () => {

    const [fullyFurnished, setFullyFurnished] = useState(false);
    const [unfurnished, setUnfurnished] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);

    const handleAgeSelection = (age) => {
        setSelectedAge(age === selectedAge ? null : age);
    };

    const handleStatusSelection = (status) => {
        setSelectedStatus(status === selectedStatus ? null : status);
    };

    const handleRoomSelection = (room) => {
        setSelectedRoom(room === selectedRoom ? null : room);
    };



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
                    <RoundedDiv width={35} height={35} size={8} />
                    <h1 className="font-medium md:font-bold  text-xl mt-2">
                        Number of Bathrooms
                    </h1>
                    <RoundedDiv width={35} height={35} size={8} />
                    <h1 className="font-medium md:font-bold  text-xl mt-2">
                        Number of Balconies
                    </h1>
                    <RoundedDiv width={35} height={35} size={8} />
                    <h1 className="font-medium md:font-bold text-xl mt-2">Other Rooms</h1>
                    <div className='w-[70%] grid grid-cols-2 gap-2 my-2'>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer   ${selectedRoom === 'Pooja Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Pooja Room')}>
                            Pooja Room
                        </div>
                        <div className={`h-full  bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer   ${selectedRoom === 'Study Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Study Room')}>
                            Study Room
                        </div>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer  ${selectedRoom === 'Servant Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Servant Room')}>
                            Servant Room
                        </div>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer   ${selectedRoom === 'Store Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Store Room')}>
                            Store Room
                        </div>

                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Area
                    </h1>
                    <p className='text-md'>Provide either Carpet Area or Super Area</p>
                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Carpet Area</h1>
                        <p className='absolute text-[8px] leading-3 font-extralight top-[10%] right-0 transform -translate-y-1/2 text-gray-500 w-[50%]'> Carpet area is the total usuable area  of your property within the walls</p>
                        <div className="flex items-center space-x-2 mb-2 ">
                            <input type="text" className="custom-border-2 rounded-xl px-2 py-1 w-[40%]" />

                            <select className="custom-border-2 rounded-xl px-2 py-1">
                                <option value="+1">Sqft</option>
                                <option value="+91">Sq-yrd</option>
                                <option value="+91">Sq-m</option>
                                <option value="+91">Acre</option>
                                <option value="+91">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Super Area</h1>
                        <p className='absolute text-[8px] leading-3 font-extralight top-[7%] right-0 transform -translate-y-1/2 text-gray-500 w-[50%]'> Super area is the total usuable area  of your property under the roof</p>
                        <div className="flex items-center space-x-2 mb-2">
                            <input type="text" className="custom-border-2 rounded-xl px-2 py-1 w-[40%]" />

                            <select className="custom-border-2 rounded-xl px-2 py-1">
                                <option value="+1">Sqft</option>
                                <option value="+91">Sq-yrd</option>
                                <option value="+91">Sq-m</option>
                                <option value="+91">Acre</option>
                                <option value="+91">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Furnished
                    </h1>
                    <div className='w-[70%] flex flex-row gap-2 my-2 cursor-pointer'>

                        <button
                            onClick={() => {

                                setFullyFurnished(true);
                                setUnfurnished(false);
                            }}
                            className={`h-full py-2 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${fullyFurnished ? 'bg-[#c9e0ee]  shadow-md' : 'bg-[#c9e0ee] border-none'}`}
                        >
                            Fully Furnished
                        </button>
                        <button
                            onClick={() => {

                                setUnfurnished(true);
                                setFullyFurnished(false);
                            }}
                            className={`h-full py-2 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${unfurnished ? 'bg-[#c9e0ee]  shadow-md' : 'bg-[#c9e0ee] border-none'}`}
                        >
                            Unfurnished
                        </button>
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
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-lg cursor-pointer ${selectedStatus === 'Ready To Move' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleStatusSelection('Ready To Move')}>
                            Ready To Move
                        </div>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-lg cursor-pointer ${selectedStatus === 'Under Construction' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleStatusSelection('Under Construction')}>
                            Under Construction
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Age of Property
                    </h1>
                    <div className='flex flex-row gap-2 mt-2'>
                        <button className={`custom-border h-full px-2 rounded-lg cursor-pointer ${selectedAge === '0-1 years' ? 'custom-border-select' : ''}`} onClick={() => handleAgeSelection('0-1 years')}>
                            0-1 years
                        </button>
                        <button className={`custom-border h-full px-2 rounded-lg cursor-pointer ${selectedAge === '1-5 years' ? 'custom-border-select ' : ''}`} onClick={() => handleAgeSelection('1-5 years')}>
                            1-5 years
                        </button>
                        <button className={`custom-border h-full px-2 rounded-lg cursor-pointer ${selectedAge === '5-10 years' ? 'custom-border-select' : ''}`} onClick={() => handleAgeSelection('5-10 years')}>
                            5-10 years
                        </button>
                        <button className={`custom-border h-full px-2 rounded-lg cursor-pointer ${selectedAge === '10+ years' ? 'custom-border-select' : ''}`} onClick={() => handleAgeSelection('10+ years')}>
                            10+ years
                        </button>
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
                <div className='flex flex-col gap-5 sticky'>
                    <div className='h-full w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center'>
                        <h1 className="text-lg mb-4 text-center mt-5">
                            Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others.</h1>
                        <Image src={'/propertyListing/assets/house.png'} alt='home' height={180} width={180} className='mt-3 mb-10' />
                        <h1 className='font-bold text-xl'>Need Help?</h1>
                        <p className='text-lg'>You Can Email Us</p>
                        <p className='text-lg text-blue-600 mb-5'>Contact@dealacres.com</p>
                    </div>
                    <div className='h-full w-[400px] rounded-xl bg-[#c9e0ee] px-4 flex flex-col items-center'>
                        <Image src={'/propertyListing/assets/smiley.png'} alt='smiley' height={80} width={80} className='mt-3 mb-2' />
                        <h1 className='text-xl mb-2'>You are Almost There</h1>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Page;