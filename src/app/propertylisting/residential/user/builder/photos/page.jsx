'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Image from 'next/image';
import Link from 'next/link';
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import FileDropzone from '@/components/propertyListing/FileDropZone';

const Page = () => {
    const [droppedFiles, setDroppedFiles] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleFilesDrop = (acceptedFiles, option) => {
        setDroppedFiles(acceptedFiles);
        setSelectedOption(option);
    };

    const isFilesDropped = () => {
        return droppedFiles.length > 0;
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <section className='mt-12 container mx-auto lg:w-4/5'>
                <NavigationBroker />
                <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-[2rem] container mx-auto my-10'>
                    <div className='h-full md:w-[350px] xl:w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center'>
                        <h1 className="text-lg text-center mt-6">
                            Click Perfect pictures of your property so the renter or buyer sees the best image of your property.</h1>
                        <Image src={'/propertyListing/assets/camera.png'} alt='camera' height={120} width={120} className='my-8' />
                        <h1 className='font-bold text-xl'>Need Help?</h1>
                        <p className='text-lg'>You Can Email Us</p>
                        <p className='text-lg text-blue-600 mb-6'>Contact@dealacres.com</p>
                    </div>
                    <div className='h-full md:w-[350px] xl:w-[400px] md:mt-10 rounded-xl px-5 border-2 border-blue-200 shadow-md'>
                        <h1 className="font-medium md:font-bold  text-xl  mt-2">
                            Add Media</h1>
                        <p className='text-xs mb-2 mt-1'>
                            <span
                                className={` cursor-pointer ${selectedOption === 'Exterior View' ? 'text-blue-600' : ''}`}
                                onClick={() => setSelectedOption('Exterior View')}
                            >
                                Exterior View
                            </span> 
                            {' '}
                            <span
                                className={` cursor-pointer ${selectedOption === 'Living Room' ? 'text-blue-600' : ''}`}
                                onClick={() => setSelectedOption('Living Room')}
                            >
                                Living Room
                            </span> 
                            {' '}
                            <span
                                className={` cursor-pointer ${selectedOption === 'Bedrooms' ? 'text-blue-600' : ''}`}
                                onClick={() => setSelectedOption('Bedrooms')}
                            >
                                Bedrooms
                            </span> 
                            {' '}
                            <span
                                className={` cursor-pointer ${selectedOption === 'Bathrooms' ? 'text-blue-600' : ''}`}
                                onClick={() => setSelectedOption('Bathrooms')}
                            >
                                Bathrooms
                            </span> 
                            {' '}
                            <span
                                className={` cursor-pointer ${selectedOption === 'Kitchen' ? 'text-blue-600' : ''}`}
                                onClick={() => setSelectedOption('Kitchen')}
                            >
                                Kitchen
                            </span> 
                            {' '}
                            <span
                                className={` cursor-pointer ${selectedOption === 'Other' ? 'text-blue-600' : ''}`}
                                onClick={() => setSelectedOption('Other')}
                            >
                                Other
                            </span>
                        </p>
                        <FileDropzone onFilesDrop={(files) => handleFilesDrop(files, selectedOption)} description={'Uploaded photo is maximum is of 2MB'} />
                        <p className='text-[0.8rem] leading-4  mt-2'>At least add 5 images of your property for good visibility and high response.</p>
                        <Link href={'pricing'}>
                            <button
                                className={`w-full bg-blue-600 rounded-md px-8 py-3 my-3 font-bold text-white hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${!isFilesDropped() ? 'cursor-not-allowed opacity-50' : ''}`}
                                disabled={!isFilesDropped()}
                            >Continue</button>
                        </Link>
                    </div>
                </div>
            </section>
        </DndProvider>
    );
};

export default Page;
