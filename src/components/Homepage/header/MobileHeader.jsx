import React from 'react';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import background from '../../../../public/background header.jpg';

const MobileHeader = () => {
    return (
        <div className="flex flex-col relative">
            <div className="flex h-[50vh]">
                <Image
                    alt="background-img"
                    src={background}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex w-4/5 mx-auto absolute top-[47vh] left-[10%] bg-white border-2 rounded-lg">
              
                
                <input
                    type="text"
                    placeholder="Search City Locality Project"
                    className="flex-grow p-3 font-semibold text-center text-base"
                />
                 <div className="flex items-center justify-center p-3 font-bold  text-gray-500">
                    <IoSearch className='h-6 w-6' />
                </div>
            </div>
        </div>
    );
};

export default MobileHeader;
