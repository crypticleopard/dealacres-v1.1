import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import background from '../../../../public/background header.jpg';
import SignupPopup from '../SignupPopup';
import OtpPopup from '../OtpPopup';

const MobileHeader = () => {
    
    const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);
    const [isOtpPopupVisible, setIsOtpPopupVisible] = useState(false);

    const handleSearchIconClick = () => {
        setIsSignupPopupVisible(true);
    };

    const handleCloseSignupPopup = () => {
        setIsSignupPopupVisible(false);
    };

    const handleOpenOtpPopup = () => {
        console.log("hi from function");
        setIsSignupPopupVisible(false);
        setIsOtpPopupVisible(true);
    };
    console.log(isOtpPopupVisible)

    const handleCloseOtpPopup = () => {
        setIsOtpPopupVisible(false);
    };
    useEffect(() => {
        handleOpenOtpPopup();
        console.log("hi");
    }, [])

    return (
        <div className="flex flex-col relative">
            <div className="flex h-[35vh]">
                <Image
                    alt="background-img"
                    src={background}
                    className="w-full h-full object-cover"
                />
            </div>
            <div onClick={handleSearchIconClick} className="flex justify-center w-3/4 mx-auto absolute top-[32vh] left-[12.5%] bg-white border-2 rounded-lg shadow-md">
                <input
                    type="text"
                    placeholder="Search City Locality Project"
                    className="p-2 font-semibold text-center text-[0.8rem]"
                />
                <div className="flex items-center px-2 font-bold text-gray-500 cursor-pointer">
                    <IoSearch className='h-6 w-6' />
                </div>
            </div>

            {isSignupPopupVisible && <SignupPopup onClose={handleCloseSignupPopup} handleOpenOtpPopup={handleOpenOtpPopup} />} 
            {isOtpPopupVisible && <OtpPopup onClose={handleCloseOtpPopup} />}
        </div>
    );
}

export default MobileHeader;
