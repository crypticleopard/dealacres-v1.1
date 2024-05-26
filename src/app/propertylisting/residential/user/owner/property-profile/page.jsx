'use client'

import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
import { CiCircleQuestion } from "react-icons/ci";

const Page = () => {

    const [fullyFurnished, setFullyFurnished] = useState(false);
    const [unfurnished, setUnfurnished] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const [showSuper, setShowSuper] = useState(false);
    const [carpetArea, setCarpetArea] = useState('')
    const [superArea, setSuperArea] = useState('')

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
        <section className='mt-8 container mx-auto lg:w-4/5'>
            <Navigation />
            <div className='flex flex-col md:flex-row px-2 items-start justify-center gap-10 md:gap-[2rem] container mx-auto my-8'>
                <div className='h-fit lg:w-[420px] rounded-xl p-3 border-2 border-blue-200 shadow-md'>
                    <h1 className="font-medium md:font-bold text-xl">
                        Now, tell us about your property
                    </h1>
                    <p className='font-medium text-base'>Describe Your Property</p>
                    <p className='text-sm my-0.5'>Write Several Things which can describe your property appropriately</p>

                    <textarea
                        id="myTextArea"
                        name="propertyDescription"
                        rows={6}
                        cols={40}
                        className='my-3 custom-border-2 rounded-md'
                        onChange={handleInputChange}
                    />
                       <h1 className="font-medium md:font-bold text-xl">
                       Property Tile
                    </h1>
                    <input
                                type="text"
                                className="custom-border-2 rounded-xl px-2 py-1 w-[75%]"
                               
                            />
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Add Room Details
                    </h1>
                    <RoundedDiv width={30} height={30} size={8} />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Number of Bathrooms
                    </h1>
                    <RoundedDiv width={30} height={30} size={8} />
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Number of Balconies
                    </h1>
                    <RoundedDiv width={30} height={30} size={8} />
                    <h1 className="font-medium md:font-bold text-xl mt-3">Other Rooms</h1>
                    <div className='w-[70%] grid grid-cols-2 gap-2 my-2'>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer ${selectedRoom === 'Pooja Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Pooja Room')}>
                            Pooja Room
                        </div>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer ${selectedRoom === 'Study Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Study Room')}>
                            Study Room
                        </div>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer ${selectedRoom === 'Servant Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Servant Room')}>
                            Servant Room
                        </div>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-md cursor-pointer ${selectedRoom === 'Store Room' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleRoomSelection('Store Room')}>
                            Store Room
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Area
                    </h1>
                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Carpet Area</h1>
                        <div className="absolute top-0 right-[50%]">
                            <span className="text-gray-500 text-xs font-extralight cursor-pointer" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}><CiCircleQuestion className='w-4 h-4' /></span>
                            {showDescription && (
                                <p className="absolute top-0 left-6 text-gray-500 text-[0.5rem] font-extralight w-52">Carpet area is the total usable area of your property within the walls</p>
                            )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                className="custom-border-2 rounded-xl px-2 py-1 w-[40%]"
                                value={carpetArea}
                                onChange={(e) => setCarpetArea(e.target.value)}
                            />
                            <select className="custom-border-2 rounded-xl px-2 py-1">
                                <option value="Sqft">Sqft</option>
                                <option value="Sq-yrd">Sq-yrd</option>
                                <option value="Sq-m">Sq-m</option>
                                <option value="Acre">Acre</option>
                                <option value="Hectare">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Super Area</h1>
                        <div className="absolute top-0 right-[50%]">
                            <span className="text-gray-500 text-xs font-extralight cursor-pointer" onMouseEnter={() => setShowSuper(true)} onMouseLeave={() => setShowSuper(false)}><CiCircleQuestion className='w-4 h-4' /></span>
                            {showSuper && (
                                <p className="absolute top-0 left-6 text-gray-500 text-[0.5rem] font-extralight w-52">Super area is the total usable area of your property under the roof</p>
                            )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                className="custom-border-2 rounded-xl px-2 py-1 w-[40%]"
                                value={superArea}
                                onChange={(e) => setSuperArea(e.target.value)}
                            />
                            <select className="custom-border-2 rounded-xl px-2 py-1">
                                <option value="Sqft">Sqft</option>
                                <option value="Sq-yrd">Sq-yrd</option>
                                <option value="Sq-m">Sq-m</option>
                                <option value="Acre">Acre</option>
                                <option value="Hectare">Hectare</option>
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
                            className={`h-full py-2 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${fullyFurnished ? 'bg-[#c9e0ee] shadow-md' : 'bg-[#c9e0ee] border-none'}`}
                        >
                            Fully Furnished
                        </button>
                        <button
                            onClick={() => {
                                setUnfurnished(true);
                                setFullyFurnished(false);
                            }}
                            className={`h-full py-2 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${unfurnished ? 'bg-[#c9e0ee] shadow-md' : 'bg-[#c9e0ee] border-none'}`}
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
                        <div className='flex flex-row items-center gap-[3.90rem]'>
                            <p className='text-md'>Open Parking</p>
                            <RoundedDiv width={25} height={25} size={2} />
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Flooring Details
                    </h1>
                    <p className='text-md'>Total No of Floor</p>
                    <input
                        name='totalFloors'
                        className='custom-border py-2 px-2 my-2 rounded-xl'
                        placeholder='Total Floors'
                        onChange={handleInputChange}
                    />
                    <input
                        name='propertyOnFloor'
                        className='custom-border py-2 px-2 mb-2 rounded-xl'
                        placeholder='Property on Floor'
                        onChange={handleInputChange}
                    />
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Availability Status
                    </h1>
                    <div className='w-[90%] flex flex-row gap-2 my-2'>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-lg cursor-pointer ${selectedStatus === 'Ready To Move' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleStatusSelection('Ready To Move')}>
                            Ready To Move
                        </div>
                        <div className={`h-full bg-[#c9e0ee] py-2 px-2 rounded-lg cursor-pointer ${selectedStatus === 'Under Construction' ? 'shadow-md border-2 border-blue-500' : ''}`} onClick={() => handleStatusSelection('Under Construction')}>
                            Under Construction
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Age of Property
                    </h1>
                    <div className='flex flex-row gap-1 mt-2'>
                        <button className={`custom-border h-full  px-2 rounded-lg cursor-pointer ${selectedAge === '0-1 years' ? 'custom-border-select' : ''}`} onClick={() => handleAgeSelection('0-1 years')}>
                            0-1 years
                        </button>
                        <button className={`custom-border h-full  px-2 rounded-lg cursor-pointer ${selectedAge === '1-5 years' ? 'custom-border-select ' : ''}`} onClick={() => handleAgeSelection('1-5 years')}>
                            1-5 years
                        </button>
                        <button className={`custom-border h-full  px-2 rounded-lg cursor-pointer ${selectedAge === '5-10 years' ? 'custom-border-select' : ''}`} onClick={() => handleAgeSelection('5-10 years')}>
                            5-10 years
                        </button>
                        <button className={`custom-border h-full  px-2 rounded-lg cursor-pointer ${selectedAge === '10+ years' ? 'custom-border-select' : ''}`} onClick={() => handleAgeSelection('10+ years')}>
                            10+ years
                        </button>
                    </div>
                    <Link href={isFormValid() ? 'photos' : '#'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-1 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${!isFormValid() ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={!isFormValid()}
                        >
                            Continue
                        </button>
                    </Link>
                </div>
                <div className='h-fit sticky top-20 flex flex-col'>

                    <div className='lg:w-[350px] xl:w-[400px] rounded-xl bg-[#e9f6fe] px-4 py-2 flex flex-col items-center'>
                        <h1 className="text-base mb-4 text-center mt-3">
                            Describe your property in brief so the buyer or renter can easily get to know how your property is and what makes your property different from others.
                        </h1>
                        <Image src={'/propertyListing/assets/house.png'} alt='home' height={120} width={120} className='mb-5' />
                        <h1 className='font-bold text-lg'>Need Help?</h1>
                        <p className='text-base'>You Can Email Us</p>
                        <p className='text-base text-blue-600 mb-3'>Contact@dealacres.com</p>
                    </div>
                    <div className='h-full lg:w-[350px] xl:w-[400px]  rounded-xl bg-[#e9f6fe] px-4 flex flex-col items-center mt-4'>
                        <Image src={'/propertyListing/assets/smiley.png'} alt='smiley' height={60} width={60} className='mt-3 mb-2' />
                        <h1 className='text-lg mb-2'>You are Almost There</h1>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Page;
