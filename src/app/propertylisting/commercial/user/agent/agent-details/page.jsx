'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactNumber from '@/components/propertyListing/ContactNumber';

const Page = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');
    const [city, setCity] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    const handleSelect = (type) => {
        setSelectedType(type === selectedType ? null : type);
    };

    const handleOptionSelection = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    const isContinueButtonDisabled = !companyName.trim() || !companyAddress1.trim() || !companyDescription.trim() || !contactNumber.trim();

    return (
        <section className="mt-12 container mx-auto lg:w-4/5">
            <div className="flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-[2rem] container mx-auto my-10">
                <div className="flex flex-col">
                    <h1 className="font-semi-bold md:text-3xl text-xl  mb-4">
                        Before listing your property<br /> buyer should know about you?
                    </h1>
                    <div className="h-full md:w-[400px] rounded-xl p-5 border-2 border-blue-200 shadow-md">
                        <p className="text-md font-semibold text-gray-500 my-2">Are You RERA registered? </p>
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <button
                                className={`h-full rounded-full border border-blue-400 px-3 py-1 text-md ${selectedOption === 'yes' ? 'bg-blue-200' : 'hover:border hover:border-blue-800'} ${selectedOption === 'yes' ? 'text-gray-800' : 'text-gray-500'}`}
                                onClick={() => handleOptionSelection('yes')}
                            >
                                yes
                            </button>
                            <button
                                className={`h-full rounded-full border border-blue-400 px-3 py-1 text-md ${selectedOption === 'I have applied' ? 'bg-blue-200' : 'hover:border hover:border-blue-800'} ${selectedOption === 'I have applied' ? 'text-gray-800' : 'text-gray-500'}`}
                                onClick={() => handleOptionSelection('I have applied')}
                            >
                                I have applied
                            </button>
                            <button
                                className={`h-full rounded-full border border-blue-400 px-3 py-1 text-md ${selectedOption === 'Not Applicable' ? 'bg-blue-200' : 'hover:border hover:border-blue-800'} ${selectedOption === 'Not Applicable' ? 'text-gray-800' : 'text-gray-500'}`}
                                onClick={() => handleOptionSelection('Not Applicable')}
                            >
                                Not Applicable
                            </button>
                        </div>

                        <p className="text-sm font-semibold text-gray-500">RERA Number</p>
                        <input type="text" className="border p-2 mb-2" />
                        <p className="text-sm font-semibold text-gray-500 mb-1">Type of Firm</p>
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <button
                                className={`h-full rounded-md border-r-2 border-l-2 border-t border-b border-blue-400 px-3 text-gray-500 text-sm py-1 ${selectedType === 'Partnership' ? 'bg-blue-200' : 'hover:border hover:border-blue-800'}`}
                                onClick={() => handleSelect('Partnership')}
                            >
                                Partnership
                            </button>
                            <button
                                className={`h-full rounded-md border-r-2 border-l-2 border-t border-b border-blue-400 px-3 text-gray-500 text-sm py-1 ${selectedType === 'Proprietor' ? 'bg-blue-200' : 'hover:border hover:border-blue-800'}`}
                                onClick={() => handleSelect('Proprietor')}
                            >
                                Proprietor
                            </button>
                            <button
                                className={`h-full rounded-md border-r-2 border-l-2 border-t border-b border-blue-400 px-3 text-gray-500 text-sm py-1 ${selectedType === 'Company' ? 'bg-blue-200' : 'hover:border hover:border-blue-800'}`}
                                onClick={() => handleSelect('Company')}
                            >
                                Company
                            </button>
                        </div>
                        <p className="text-md font-semibold text-gray-500 my-2">Company Details </p>
                        <div className="md:w-[80%]">
                            <input
                                placeholder="Company Name"
                                type="text"
                                className="p-2 w-full mb-2 border"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <input placeholder="Company URL (optional)" type="text" className="p-2 w-full mb-2 border" />
                            <input
                                placeholder="Company Address 1"
                                type="text"
                                className="p-2 w-full mb-2 border"
                                value={companyAddress1}
                                onChange={(e) => setCompanyAddress1(e.target.value)}
                            />
                            <input placeholder="Company Address 2 (optional)" type="text" className="p-2 w-full mb-2 border" />
                            <input
                                placeholder="City"
                                type="text"
                                className="p-2 w-full mb-2 border"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <p className="text-md font-semibold text-gray-500 mb-2">Describe Your Company</p>
                        <textarea
                            className="border w-full p-2 mb-2"
                            placeholder="What makes your company unique?"
                            cols={30}
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)}
                        />
                        <p className="text-md font-semibold text-gray-500 mb-2">Contact Details</p>
                        <ContactNumber onContactNumberChange={setContactNumber} />

                        <Link href="location-details">
                            <button
                                className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-2 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${isContinueButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                                disabled={isContinueButtonDisabled}
                            >
                                Continue
                            </button>
                        </Link>
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
        </section>
    );
};

export default Page;
