import React from 'react';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import background from '../../../../public/background header.jpg';

const MobileHeader = () => {
    return (
        <div className="flex flex-col relative">
            <div className="flex h-[43vh]">
                <Image
                    alt="background-img"
                    src={background}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex justify-center w-3/4 mx-auto absolute top-[40vh] left-[12.5%] bg-white border-2 rounded-lg">
              
                
                <input
                    type="text"
                    placeholder="Search City Locality Project"
                    className=" p-2 font-semibold text-center text-[0.8rem]"
                />
                 <div className="flex items-center  px-2 font-bold  text-gray-500">
                    <IoSearch className='h-6 w-6' />
                </div>
            </div>
        </div>
    );
};

export default MobileHeader;
