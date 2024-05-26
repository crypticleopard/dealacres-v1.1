'use client';

import NavigationBroker from "@/components/propertyListing/Navigation/NavigationBroker";

import Image from "next/image";
import AmenitiesList from '@/components/propertyListing/Amenities';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FileDropzone from "@/components/propertyListing/FileDropZone";
import { propertyFacing } from "@/components/propertyListing/constants";
import PropertyFacingButton from "@/components/propertyListing/Button/propertyFacingButton";
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
        setSelectedPropertyFacing(face);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <section className='mt-12 container mx-auto lg:w-4/5'>

                <NavigationBroker />
                <div className='flex flex-col md:flex-row px-2 items-start justify-center gap-10 md:gap-[2rem] container mx-auto mt-10 mb-5'>

                    <div className='h-full lg:w-[420px] rounded-xl p-5 border-2 border-blue-200 shadow-md'>

                        <h1 className="font-medium md:font-bold  text-xl mb-4">Add Amenties and Features</h1>
                        <AmenitiesList />
                        {/* <div className="flex flex-row items-center">
                        <p className="text-xl text-blue-600">More</p>
                        <MdKeyboardDoubleArrowDown size={20} color="blue" />
                    </div> */}
                        <h1 className="font-medium md:font-bold  text-xl my-2">
                            Property Facing
                        </h1>
                        {propertyFacing.map((face, idx) => (
                            <PropertyFacingButton
                                key={idx}
                                heading={face}
                                onClick={() => handlePropertyFacingChange(face)}
                                isActive={selectedPropertyFacing === face}
                            />
                        ))}
                        <h1 className="font-medium md:font-bold  text-xl my-2">
                            Upload Floor Plan
                        </h1>
                        <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is maximum is of 5MB'} />
                    </div>

                    <div className='  sticky top-20 h-fit w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center mt-5'>
                        <ul className="list-disc pl-6 text-xl mt-5">
                            <li className="mb-2 text-lg">Mention attractive amenities and appealing details of your property.</li>
                            <li className="mb-2 text-lg">Add property proximity to transit Shopping, Market Areas, and more...</li>
                        </ul>
                        <Image src={'/propertyListing/assets/amenities.png'} alt='amenities' height={120} width={120} className='mt-5 mb-8' />
                        <h1 className='font-bold text-xl'>Need Help?</h1>
                        <p className='text-lg'>You Can Email Us</p>
                        <p className='text-lg text-blue-600 mb-5'>Contact@dealacres.com</p>
                    </div>

                </div>
                <div className='md:px-24'>
                    <Link href={'builder-details'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${!areFieldsFilled ? 'cursor-not-allowed opacity-50' : ''}`}
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


