'use client'
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import Image from 'next/image';
import { CiCircleQuestion } from "react-icons/ci";

import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
import { useState } from 'react';
import RoomInfo from '@/components/propertyListing/RoomInfo';
import OtherRoomButton from '@/components/propertyListing/Button/OtherRoomButton';

const Page = () => {

    const [totalFloor, setTotalFloor] = useState('');
    const [property, setProperty] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [bedroomCount, setBedroomCount] = useState(null);
    const [bathroomCount, setBathroomCount] = useState(null);
    const [balconieCount, setBalconieCount] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [fullyFurnished, setFullyFurnished] = useState(false);
    const [unfurnished, setUnfurnished] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showSuper, setShowSuper] = useState(false);
    const [carpetArea, setCarpetArea] = useState('')
    const [superArea, setSuperArea] = useState('')

    const handleStatusSelection = (status) => {
        setSelectedStatus(status === selectedStatus ? null : status);
    };

    const handleRoomSelection = (room) => {
        setSelectedRoom(room === selectedRoom ? null : room);
    };

    const toggleVisibility = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    };
    const handleBedroomButtonClick = (count) => {
        setBedroomCount(count);
    };
    const handleBathroomButtonClick = (count) => {
        setBathroomCount(count);
    };
    const handleBalconieButtonClick = (count) => {
        setBalconieCount(count);
    };
    const handleAgeSelection = (index) => {
        setSelectedAge(index);
    };

    const isContinueButtonDisabled =
        totalFloor.trim() === '' ||
        property.trim() === '' ||
        (bedroomCount === null && bathroomCount === null && balconieCount === null);



    return (
        <section className='mt-12 container mx-auto lg:w-4/5'>
            <NavigationBroker />
            <div className='flex flex-col md:flex-row px-2 items-start justify-center gap-10 md:gap-[2rem] container mx-auto my-10'>

                <div className='h-full lg:w-[420px]  rounded-xl p-3 custom-border'>
                <h1 className="font-medium md:font-bold text-xl">
                        Now, tell us about your property
                    </h1>
                    <p className='font-medium text-base'>Describe Your Property</p>
                    <p className='text-sm my-0.5'>Write Several Things which can describe your property appropriately</p>

                    <textarea
                        id="myTextArea"
                        name="myTextArea"
                        rows={6}
                        cols={40}
                        className='my-3 custom-border-2 rounded-md'
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
                    <RoundedDiv width={30} height={30} size={5} onClick={handleBedroomButtonClick} dropdown={true} dropdownLength={95} onSelectionChange={handleBedroomButtonClick} />
                    {bedroomCount !== null && <RoomInfo roomCount={bedroomCount} roomtype={'BedRoom'} />}

                    <h1 className="font-medium md:font-bold  text-xl mt-3">
                        Number of Bathrooms
                    </h1>
                    <RoundedDiv width={30} height={30} size={5} onClick={handleBathroomButtonClick}  dropdown={true} dropdownLength={95} onSelectionChange={handleBathroomButtonClick}/>
                    {bathroomCount !== null && <RoomInfo roomCount={bathroomCount} roomtype={'BathRoom'} />}

                    <h1 className="font-medium md:font-bold  text-xl mt-3">
                        Number of Balconies
                    </h1>
                    <RoundedDiv width={30} height={30} size={5} onClick={handleBalconieButtonClick} dropdown={true} dropdownLength={95} onSelectionChange={handleBalconieButtonClick}/>
                    {balconieCount !== null && <RoomInfo roomCount={balconieCount} roomtype={'Balconie'}  />}
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Other Rooms
                    </h1>
                    <div className='w-full md:w-[85%] mt-2 mb-4'>
                        <OtherRoomButton />
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
                    <div className='w-[70%] flex flex-row gap-2 my-2'>
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
                        Flooring Details
                    </h1>
                    <p className='text-md'>Total No of Floor</p>
                    <div className='flex flex-col md:w-[50%]'>
                        <select
                            value={totalFloor}
                            onChange={(e) => setTotalFloor(e.target.value)}
                            className='custom-border py-2 px-2 my-2 rounded-xl'>
                            <option value={""} disabled hidden className='text-xs'>Total Floors</option>
                            <option>Lower Basement</option>
                            <option>Upper Basement</option>
                            <option>Ground</option>
                        </select>
                        <select
                            value={property}
                            onChange={(e) => setProperty(e.target.value)}
                            className='custom-border py-2 px-2 mb-2 rounded-xl' >
                            <option value="" disabled hidden className='text-xs'>
                                Property on Floor
                            </option>
                            {Array.from({ length: 100 }, (_, index) => index + 1).map((number) => (
                                <option key={number} value={number}>
                                    {number}
                                </option>
                            ))}
                        </select>
                    </div>
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
                    <div className=' mt-2'>
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                className={`h-full px-2 rounded-lg mr-2 mb-2 ${selectedAge === index ? ' border-x-2 border-y-4 border-blue-700' : 'custom-border '}`}
                                onClick={() => handleAgeSelection(index)}
                            >
                                {index === 0 ? 'New Construction' : `${(index - 1) * 5}-${index * 5} years`}
                            </button>
                        ))}


                        <button className=' h-full rounded-lg' onClick={toggleVisibility}>
                            {isExpanded ? '▲' : '▼'}
                        </button>

                        {isExpanded && [3, 4].map((index) => (
                            <button
                                key={index}
                                className={`h-full px-2 rounded-lg mr-2 mb-2 ${selectedAge === index ? ' border-x-2 border-y-4 border-blue-700' : 'custom-border '}`}
                                onClick={() => handleAgeSelection(index)}
                            >
                                {`${(index - 1) * 5}-${index * 5} years`}
                            </button>
                        ))}
                    </div>

                    <Link href={'photos'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-2 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${isContinueButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
                                }`}
                            disabled={isContinueButtonDisabled}
                        >
                            Continue
                        </button>
                    </Link>
                </div>
                <div className='h-fit sticky top-20 flex flex-col'>

                    <div className=' lg:w-[350px] xl:w-[400px] rounded-xl bg-[#e9f6fe] px-4 py-2 flex flex-col items-center'>
                        <h1 className="text-base mb-4 text-center mt-3">
                            Describe your property in brief so the buyer or renter can easily get to know how your property is and what makes your property different from others.
                        </h1>
                        <Image src={'/propertyListing/assets/house.png'} alt='home' height={120} width={120} className='mb-5' />
                        <h1 className='font-bold text-lg'>Need Help?</h1>
                        <p className='text-base'>You Can Email Us</p>
                        <p className='text-base text-blue-600 mb-3'>Contact@dealacres.com</p>
                    </div>
                    <div className='h-full lg:w-[350px] xl:w-[400px] rounded-xl bg-[#e9f6fe] px-4 flex flex-col items-center mt-4'>
                        <Image src={'/propertyListing/assets/smiley.png'} alt='smiley' height={60} width={60} className='mt-3 mb-2' />
                        <h1 className='text-lg mb-2'>You are Almost There</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;