'use client';

import { useState } from 'react';
import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import FileDropzone from '@/components/propertyListing/FileDropZone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Page = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleFilesDrop = (acceptedFiles) => {

    setDroppedFiles(acceptedFiles);
  };

  const isFilesDropped = () => {
    return droppedFiles.length > 0;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section className='mt-12 container mx-auto lg:w-4/5'>
        <Navigation />
        <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-[4rem]  container mx-auto my-10 overflow-auto'>
          <div className='h-full w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center'>
            <h1 className="text-lg text-center mt-8">
              Click Perfect pictures of your property so the renter or buyer can see the best images of your property.
            </h1>
            <Image src={'/propertyListing/assets/camera.png'} alt='camera' height={120} width={120} className='my-10' />
            <h1 className='font-bold text-xl'>Need Help?</h1>
            <p className='text-lg'>You Can Email Us</p>
            <p className='text-lg text-blue-600 mb-8'>Contact@dealacres.com</p>
          </div>
          <div className='h-full md:w-[400px] md:mt-8 rounded-xl p-5 border-2 border-blue-200 shadow-md'>
            <h1 className="font-medium md:font-bold  text-xl mb-2">
              Add Media
            </h1>
            <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is a maximum of 2MB'} />
            <p className='text-sm mb-3 mt-1'>At least add 3 images of your property for good visibility and a high response.</p>
            <Link href={isFilesDropped() ? 'pricing-&others' : '#'}>
              
              <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-2 mb-1  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 
              ${!isFilesDropped()  ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={!isFilesDropped()}
                        >
                            Continue
                        </button>
            </Link>
          </div>
        </div>
      </section>
    </DndProvider>
  );
};

export default Page;
