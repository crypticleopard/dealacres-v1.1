'use client';

import React from 'react'
import Image from 'next/image'

import { useState } from 'react';
import ContactNumber from '@/components/propertyListing/ContactNumber';
import FeedbackModal from "@/components/propertyListing/FeedbackModal";
import PostModal from '@/components/propertyListing/PostModal';

const Page = () => {
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [isGDPRChecked, setIsGDPRChecked] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');
    const [city, setCity] = useState('');
    const [companyDescription, setCompanyDescription] = useState('')
    const [contactNumber, setContactNumber] = useState('');


    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedLicenseType, setSelectedLicenseType] = useState(null);

    const handleLicenseTypeSelection = (type) => {
        setSelectedLicenseType(type === selectedLicenseType ? null : type);
    };

    const handleOptionSelection = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };
    const handlePostSubmit = (e) => {
        e.preventDefault();
        openFeedbackModal();
        closePostModal();
    };
    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();

    };
    const isContinueButtonDisabled = !isGDPRChecked || companyName.trim() === '' || companyAddress1.trim() === '' || companyDescription.trim() === '' ||
        contactNumber.trim() === '';;

    return (
        <section className='mt-12 container mx-auto lg:w-4/5'>
            <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-[4rem] container mx-auto my-10 '>
                <div className='flex flex-col'>
                    <h1 className="font-semi-bold md:text-3xl text-xl  mb-4">
                        Before listing your property<br /> buyer should know about you?</h1>
                    <div className='h-full md:w-[400px] rounded-xl p-5 border-2 border-blue-200 shadow-md'>
                        <h1 className='text-xl text-gray-500 font-semibold'>Before you post... let buyers know who you are</h1>
                        <p className='text-xs text-gray-400 font-extralight'>This Details will seriously help buyers to connect with you</p>
                        <p className="text-md font-semibold text-gray-500 my-2">Are You RERA registered? </p>
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <button
                                className={`h-full rounded-full border border-blue-400 px-3 py-1 text-md ${selectedOption === 'yes' ? ' bg-blue-200' : 'hover:border hover:border-blue-800'} ${selectedOption === 'yes' ? 'text-gray-800' : 'text-gray-500'}`}
                                onClick={() => handleOptionSelection('yes')}
                            >
                                yes
                            </button>
                            <button
                                className={`h-full rounded-full border border-blue-400 px-3 py-1 text-md ${selectedOption === 'I have applied' ? ' bg-blue-200' : 'hover:border hover:border-blue-800'} ${selectedOption === 'I have applied' ? 'text-gray-800' : 'text-gray-500'}`}
                                onClick={() => handleOptionSelection('I have applied')}
                            >
                                I have applied
                            </button>
                            <button
                                className={`h-full rounded-full border border-blue-400 px-3 py-1 text-md ${selectedOption === 'Not Applicable' ? ' bg-blue-200' : 'hover:border hover:border-blue-800'} ${selectedOption === 'Not Applicable' ? 'text-gray-800' : 'text-gray-500'}`}
                                onClick={() => handleOptionSelection('Not Applicable')}
                            >
                                Not Applicable
                            </button>
                        </div>
                        <p className='text-sm font-semibold text-gray-500'>RERA Number</p>
                        <input type='text' className='border p-2 mb-2' />
                        <p className='text-sm font-semibold text-gray-500 mb-1'>License Type</p>
                        <div className='flex flex-row items-center gap-2 mb-4'>
                            <button
                                className={`h-full rounded-2xl border-r-2 border-l-2 border-t  border-blue-400 border-b ${selectedLicenseType === 'Individual' ? ' bg-blue-200' : 'hover:border hover:border-blue-800'} px-3 text-gray-500 text-sm py-1`}
                                onClick={() => handleLicenseTypeSelection('Individual')}
                            >
                                Individual
                            </button>
                            <button
                                className={`h-full rounded-2xl border-r-2 border-l-2 border-t  border-blue-400 border-b ${selectedLicenseType === 'Firm' ? ' bg-blue-200' : 'hover:border hover:border-blue-800'} px-3 text-gray-500 text-sm py-1`}
                                onClick={() => handleLicenseTypeSelection('Firm')}
                            >
                                Firm
                            </button>
                        </div>
                        <p className='text-md font-semibold text-gray-500 my-2'>Company Details </p>
                        <div className='md:w-[80%]'>
                            <input
                                placeholder='Company Name'
                                type='text'
                                className='p-2 w-full mb-2 border'
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <input placeholder='Company URL (optional)' type='text' className='p-2  w-full mb-2 border' />
                            <input
                                placeholder='Company Address 1'
                                type='text'
                                className='p-2 rounded-lg w-full mb-2 border'
                                value={companyAddress1}
                                onChange={(e) => setCompanyAddress1(e.target.value)} />
                            <input placeholder='Company Address 2 (optional)' type='text' className='p-2  w-full mb-2 border' />
                            <input
                                placeholder='City'
                                type='text'
                                className='p-2  w-full mb-2 border'
                                value={city}
                                onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <p className='text-md font-semibold text-gray-500 mb-2'>Describe Your Company</p>
                        <textarea
                            className='border'
                            placeholder={'What makes your company unique?'}
                            cols={30}
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)} />
                        <p className='text-md font-semibold text-gray-500 mb-2'>Contact Details</p>
                        <ContactNumber onContactNumberChange={setContactNumber} />


                    </div>
                </div>
                <div className="w-[400px] sticky top-20 h-fit rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center">
                    <h1 className="text-lg text-center mt-10">This information helps buyer to connect with you easily</h1>
                    <Image src="/propertyListing/assets/broker.png" alt="location" height={120} width={120} className="my-10" />
                    <h1 className="font-bold text-xl">Need Help?</h1>
                    <p className="text-lg">You Can Email Us</p>
                    <p className="text-lg text-blue-600 mb-10">Contact@dealacres.com</p>
                </div>
            </div>
            <div className="md:px-24">
                <h1 className=" font-heading mb-2">GDPR Agreement *</h1>
                <div className="flex flex-row items-center my-2 gap-2">
                    <input
                        type="checkbox"
                        className="input-checkbox "
                        checked={isGDPRChecked}
                        onChange={() => setIsGDPRChecked(!isGDPRChecked)}
                    />
                    <p className="text-xl">I agree to this website &quot;Deal Acres&quot; storing my submitted information; see more details below.</p>
                </div>
                <div className="bg-[#e1dff8] p-2 rounded-lg mb-4">
                    <p>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
                </div> <button
                    onClick={openPostModal}
                    className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${isContinueButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                    disabled={isContinueButtonDisabled}
                >Post Your Property</button>
                <PostModal isOpen={isPostModalOpen} onSubmit={handlePostSubmit} />
                <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} onSubmit={handleFeedbackSubmit} />

            </div>
        </section>
    )
}

export default Page