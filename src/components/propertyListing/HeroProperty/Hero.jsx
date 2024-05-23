'use client';
import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import FREE from '../../../../public/propertyListing/assets/free.png'


const Hero = () => {

    const [isResedentialClicked, setIsResedentialClicked] = useState(false);
    const [isCommercialClicked, setCommercialClicked] = useState(false);
    const [isFiveClicked, setIsFiveClicked] = useState(false);
    const [propertyType, setPropertyType] = useState('');
    const [subType, setSubType] = useState('');
    const [isSellClicked, setIsSellClicked] = useState(false);
    const [isRentClicked, setIsRentClicked] = useState(false);

    const handleSell = () =>{
        setIsSellClicked(true)
        setIsRentClicked(false)
    }
    const handleRent = () =>{
        setIsRentClicked(true)
        setIsSellClicked(false)
    }
 
    const handleFive = () => {
        setIsFiveClicked(!isFiveClicked);
    }
    const handleResedential = () => {
        setIsResedentialClicked(true);
        setCommercialClicked(false)
        setPropertyType('residential');
        setSubType('');
    }
    const handleCommercial = () => {
        setCommercialClicked(true);
        setIsResedentialClicked(false)
        setPropertyType('commercial');
        setSubType('');
    }
    const handleSubType = (subtype) => {
        setSubType(subtype.toLowerCase());
    };
    const generateDynamicPath = () => {
        let path = `propertylisting/${propertyType}`;
        if (subType) {
          path += `/${subType}`;
        }
        path += '/login';
        return path;
    };

    
    return (
        <section className='flex flex-col md:flex-row px-4 items-start justify-center gap-8 container mx-auto my-8  '>
            <div className=' md:mt-8 rounded-xl pt-2 px-3 border-4 border-blue-200 text-start shadow-md shadow-blue-200'>
                <div className='h-fit'>
                <h1 className="font-medium md:font-bold text-[1.3rem] uppercase mt-2">
                    Post Your Property for free
                </h1>
                <p>
                    Add Basic Details
                </p>
                <p className='py-1.5 mt-1 font-bold'>
                    Looking For..........
                </p>
                <div className='flex gap-3 items-center mb-0.5'>
                <Button heading={'Sell'} onClick={handleSell} isActive={isSellClicked} hashClick={true}/>
                    <Button heading={'Rent'} onClick={handleRent} isActive={isRentClicked} hashClick={true}/>
                </div>
                <p className='py-1.5 font-bold'>
                    Property Type
                </p>
                <div className='flex gap-3 items-center mb-0.5'>
                    <Button heading={'Residential'} onClick={handleResedential} hashClick={true} isActive={isResedentialClicked}/>
                    <Button heading={'Commercial'} onClick={handleCommercial} hashClick={true} isActive={isCommercialClicked} />
                </div>
                {isResedentialClicked && (
                    <div className='flex flex-col'>
                        <div className='flex flex-row w-[50%]'>
                            <Button heading={'Flat/Apartment'}  px="3" textBase="sm" />
                            <Button heading={'villa'}  px="3" textBase="sm" />
                            <Button heading={'plot'} onClick={() => handleSubType('Plot')} hashClick={true}  px="3" textBase="sm"  />

                        </div>
                        <div>
                            <Button heading={'Independent House'}  px="3" textBase="sm"  />
                            <Button heading={'Builder Floor'}  px="3" textBase="sm" />
                        </div>
                    </div>
                )}
                {isCommercialClicked && (
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <Button heading={'Commercial Shop'} px="3" textBase="sm"  />
                            <Button heading={'Commercial Office Space'} px="3" textBase="sm"  />

                        </div>
                        <div className='flex flex-row items-center'>
                            <Button heading={'Commercial Showroom'} px="3" textBase="sm"  />
                            <Button heading={'Commercial Land'} px="3" textBase="sm"  />
                            <p className='font-bold text-blue-600 cursor-pointer' onClick={handleFive}>+5</p>
                        </div>
                    </div>
                )}
                {isFiveClicked && (
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <Button heading={'Warehouse/ Godown'} px="3" textBase="sm" />
                            <Button heading={'Industrial Land'} px="3" textBase="sm" />


                        </div>
                        <div className='flex flex-row items-center'>
                            <Button heading={'Industrial Building'} px="3" textBase="sm" />
                            <Button heading={'Industrial Shed'} px="3" textBase="sm"  />
                            <Button heading={'Office in IT Park/ SEZ'} px="3" textBase="sm" />
                        </div>
                    </div>
                )}
                <p className='py-1 font-bold'>
                    Add Contact Details
                </p>
                
                <input className='custom-border-2 px-4 py-1 rounded-xl' />
                <p className='text-xs mt-5 pb-1'>Are you a Registered user?<span className='text-blue-500 ml-1'>
                <Link href={generateDynamicPath()}>
                    Login</Link>
                    </span> </p>
                <Link href={generateDynamicPath()}>
                    <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mb-6 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600'>Start Now</button>
                </Link>
                </div>
            </div>
            <div className='h-full w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center'>
                <div className='flex flex-row gap-2 mt-10 mb-5'>
                    <h1 className="text-lg mt-2 font-semibold mb-6">
                        Post property Ad to <br />
                        sell or rent online for</h1>
                    <h1 className='text-6xl font-bold italic uppercase '>Free</h1>
                </div>

                <ul className="list-disc pl-5 text-[1.1rem]">
                    <li className="mb-2">Advertise For FREE</li>
                    <li className="mb-2">Sell 10 X faster</li>
                    <li className="mb-2">Connect with genuine buyers</li>
                    <li className="mb-2">Get unlimited enquiries</li>
                </ul>
                <Image src={FREE} alt='free' height={200} width={200} className='mt-10 mb-5' />
            </div>
        </section>
    )
}

export default Hero
