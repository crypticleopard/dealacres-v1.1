'use client';
import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Page = () => {

    const [constructionStatus, setConstructionStatus] = useState('');
    const [boundarywall, setBoundarywall] = useState('');
    const [propertyDescription, setPropertyDescription] = useState('');
    const [floorType, setFloorType] = useState('');
    const [openSlides, setOpenSlides] = useState('');
    const [roadWidth, setRoadWidth] = useState('');
    const [plotArea, setPlotArea] = useState('');
    const [plotLength, setPlotLength] = useState('');
    const [plotBreadth, setPlotBreadth] = useState('');
    const [isCornerPlot, setIsCornerPlot] = useState(false);
    const [isContinueDisabled, setIsContinueDisabled] = useState(true);

    const handleRadioChange = (event) => {
        setConstructionStatus(event.target.value);
        checkContinueButtonState();
    };

    const handleRadioChangeWall = (e) => {
        setBoundarywall(e.target.value);
        checkContinueButtonState();
    };

    const checkContinueButtonState = () => {
        setIsContinueDisabled(
            !propertyDescription ||
            !floorType ||
            !openSlides ||
            !roadWidth ||
            !plotArea ||
            !plotLength ||
            !plotBreadth
        );
    };

    const handleInputChange = (setter, value) => {
        setter(value);
        checkContinueButtonState();
    };

    const handleCheckboxChange = () => {
        setIsCornerPlot(!isCornerPlot);
        checkContinueButtonState();
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
                        name="myTextArea"
                        rows={10}
                        cols={40}
                        className='my-6 custom-border-2 rounded-md'
                        value={propertyDescription}
                        onChange={(e) => handleInputChange(setPropertyDescription, e.target.value)}
                    />
                    <div className='flex flex-col gap-3 w-[85%]'>
                        <label for="floorType" className='text-md font-medium text-gray-500'>Floors Allowed For Construction</label>
                        <select
                            id="floorType"
                            name="roomType"
                            className='border-b-2 mb-5'
                            value={floorType}
                            onChange={(e) => handleInputChange(setFloorType, e.target.value)}
                        >
                            <option value="Total">Total Floor</option>
                            <option value="Ground">Ground Floor</option>
                            <option value="1st">1st Floor</option>
                            <option value="2nd">2nd Floor</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-3 w-[85%]'>
                        <label htmlFor="slide" className='text-md font-medium text-gray-500'>No of Open slides</label>
                        <select
                            id="slide"
                            name="slidesno"
                            className='border-b-2 mb-5'
                            value={openSlides}
                            onChange={(e) => handleInputChange(setOpenSlides, e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-3 w-[85%]'>
                        <label for="floorType" className='text-md font-medium text-gray-500'>Width of Road facing the plot</label>
                        <input
                            type='text'
                            placeholder='Road Width'
                            className='border-b-2 mb-5'
                            value={roadWidth}
                            onChange={(e) => handleInputChange(setRoadWidth, e.target.value)}
                        />
                    </div>
                    <div className='flex flex-row gap-4 text-gray-500'>
                        <p>Any Construction Done?</p>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                checked={constructionStatus === 'yes'}
                                onChange={handleRadioChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="no"
                                checked={constructionStatus === 'no'}
                                onChange={handleRadioChange}
                            />
                            No
                        </label>
                    </div>
                    <div className='flex flex-row gap-4 text-gray-500 mt-5'>
                        <p>Boundary Wall made?</p>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                checked={boundarywall === 'yes'}
                                onChange={handleRadioChangeWall}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="no"
                                checked={boundarywall === 'no'}
                                onChange={handleRadioChangeWall}
                            />
                            No
                        </label>
                    </div>
                    <h1 className='font-bold text-xl text-gray-500 mt-10 mb-5'>Area</h1>
                    <div className='flex flex-col gap-1 w-[85%]'>
                        <label for="floorType" className='text-sm font-medium text-gray-500'>Plot Area</label>
                        <div className='flex flex-row gap-1 text-gray-500'>
                            <input
                                type="text"
                                placeholder="Plot Area"
                                className="border-b-2 py-1  mb-2 "
                                value={plotArea}
                                onChange={(e) => handleInputChange(setPlotArea, e.target.value)}
                            />
                            <select

                                className="border-b-2 py-1  mb-2 "
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="option1">Sq-ft</option>
                                <option value="option2">Sq-yrd</option>
                                <option value="option3">Sq-m</option>
                                <option value="option3">Acre</option>
                                <option value="option3">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-[85%]'>
                        <label for="floorType" className='text-sm font-medium text-gray-500 mt-4'>Plot Length</label>
                        <div className='flex flex-row gap-1 text-gray-500 mb-4'>
                            <input
                                type="text"
                                placeholder="Plot Length"
                                className="border-b-2 py-1  mb-2 "
                                value={plotLength}
                                onChange={(e) => handleInputChange(setPlotLength, e.target.value)}
                            />
                            <select

                                className="border-b-2 py-1  mb-2 "
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="option1">Sq-ft</option>
                                <option value="option2">Sq-yrd</option>
                                <option value="option3">Sq-m</option>
                                <option value="option3">Acre</option>
                                <option value="option3">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-[85%]'>
                        <label for="floorType" className='text-sm font-medium text-gray-500'>Plot Breadth</label>
                        <div className='flex flex-row gap-1 text-gray-500'>
                            <input
                                type="text"
                                placeholder="Plot Breadth"
                                className="border-b-2 py-1  mb-2 "
                                value={plotBreadth}
                                onChange={(e) => handleInputChange(setPlotBreadth, e.target.value)}
                            />
                            <select

                                className="border-b-2 py-1  mb-2 "
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="option1">Sq-ft</option>
                                <option value="option2">Sq-yrd</option>
                                <option value="option3">Sq-m</option>
                                <option value="option3">Acre</option>
                                <option value="option3">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input
                            type="checkbox"
                            className='input-checkbox'
                            checked={isCornerPlot}
                            onChange={handleCheckboxChange}
                        />
                        <p className='text-md'>This is a corner Plot</p>
                    </div>
                    <Link href={'photos'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${isContinueDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={isContinueDisabled}
                        >Continue</button>
                    </Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='h-full w-[400px] rounded-xl bg-[#c9e0ee] p-4 flex flex-col items-center'>
                        <h1 className="text-xl mb-4 text-center mt-20 px-4">
                            Describe your property in brief so the buyer or tenant can easily get to know how your property is what makes your property different from others.</h1>
                        <Image src={'/propertyListing/assets/locationpin.png'} alt='home' height={200} width={200} className='mt-3 mb-10' />
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