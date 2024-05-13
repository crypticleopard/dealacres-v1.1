'use client';

import NavigationBroker from "@/components/propertyListing/Navigation/NavigationBroker";

import Image from "next/image";
import AmenitiesList from '@/components/propertyListing/Amenities';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FileDropzone from "@/components/propertyListing/FileDropZone";
import { propertyFacing } from "@/components/propertyListing/constants";
import Button from "@/components/propertyListing/Button/Button";
import Link from 'next/link';
import { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



const Page = () => {
    
    const [selectedPropertyFacing, setSelectedPropertyFacing] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const areFieldsFilled = selectedPropertyFacing.length > 0 || uploadedFiles.length > 0;

    const handleFilesDrop = (acceptedFiles) => {
        console.log('Dropped files:', acceptedFiles);
        setUploadedFiles(acceptedFiles);
    };

    const handlePropertyFacingChange = (face) => {
        setSelectedPropertyFacing((prevFacing) => {
            if (prevFacing.includes(face)) {
                return prevFacing.filter((facing) => facing !== face);
            } else {
                return [...prevFacing, face];
            }
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
        <section className='mt-12 container mx-auto lg:w-4/5'>

            <NavigationBroker />
            <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>

                <div className='h-full md:w-[450px] rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4'>

                    <h1 className="font-medium md:font-bold md:text-2xl text-xl mb-4">Add Amenties and Features</h1>
                    <AmenitiesList />
                    <div className="flex flex-row items-center">
                        <p className="text-xl text-blue-600">More</p>
                        <MdKeyboardDoubleArrowDown size={20} color="blue" />
                    </div>
                    <h1 className="font-medium md:font-bold md:text-2xl text-xl my-2">
                        Property Facing
                    </h1>
                    {propertyFacing.map((face, idx) => (
                        <Button
                            key={idx}
                            heading={face}
                            onClick={() => handlePropertyFacingChange(face)}
                            selected={selectedPropertyFacing.includes(face)}
                        />
                    ))}
                    <h1 className="font-medium md:font-bold md:text-2xl text-xl my-2">
                        Upload Floor Plan
                    </h1>
                    <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is maximum is of 5MB'} />
                </div>

                <div className='h-full w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center mt-5'>
                    <ul className="list-disc pl-12 text-xl mt-16">
                        <li className="mb-2">Mention attractive amenities and appealing details of your property.</li>
                        <li className="mb-2">Add property proximity to transit Shopping, Market Areas, and more...</li>
                    </ul>
                    <Image src={'/propertyListing/assets/amenities.png'} alt='amenities' height={200} width={200} className='mt-3 mb-10' />
                    <h1 className='font-bold text-xl'>Need Help?</h1>
                    <p className='text-lg'>You Can Email Us</p>
                    <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
                </div>

            </div>
            <div className='md:px-24'>
                <Link href={'builder-details'}>
                    <button
                        className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${!areFieldsFilled ? 'cursor-not-allowed bg-blue-400' : ''
                            }`}
                        disabled={!areFieldsFilled}
                    >
                        Continue Property
                    </button>
                </Link>
            </div>



        </section>
        </DndProvider>)

}


export default Page


