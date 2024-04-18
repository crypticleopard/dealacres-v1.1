

'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Card = ({ index, imageUrl, heading }) => {
    return (
        <div key={index} className=" min-w-[102px] max-w-[112px]  flex flex-col items-center justify-center gap-3 p-2 rounded-xl bg-white text-black">
            <p className='font-bold text-center text-xs xl:text-base'>{heading}</p>
            <Image src={imageUrl} width={40} height={60} alt={heading} />
        </div>
    );
};

const ExploreServices = () => {
   

    const cardData = [
        
        {
            imageUrl: 'https://media-public.canva.com/N3bz0/MAFi_QN3bz0/1/t.png',
            heading: 'Rent Agreement'
        },
        {
            imageUrl: 'https://media-public.canva.com/nB8Ek/MAFfqznB8Ek/1/t.png',
            heading: 'Home Loan'
        },
        {
            imageUrl: 'https://media-public.canva.com/FX_B4/MAFaqXFX_B4/1/t.png',
            heading: 'Property Valuer'
        },
        {
            imageUrl: 'https://media-public.canva.com/zLeFA/MAFKtnzLeFA/1/t.png',
            heading: 'Legal Services'
        },
        {
            imageUrl: 'https://media-public.canva.com/iA9GI/MAERBHiA9GI/1/t.png',
            heading: 'Chartered Accountant'
        },
        {
            imageUrl: '/homePage/homeDecor.webp',
            heading: 'Home Decor'
        },
        {
            imageUrl: '/homePage/homeInterior.webp',
            heading: 'Home Interior'
        },
        {
            imageUrl: '/homePage/vastu_sastra.png',
            heading: 'Vastu Sartar'
        },
        {
            imageUrl: '/homePage/construction.webp',
            heading: 'Construction Contractor'
        },
        {
            imageUrl: '/homePage/modular.webp',
            heading: 'Modular Kitchen'
        }
    ];

   

    return (
        <div className='bg-[#dff0f0] p-5 md:p-10 '>
            <h2 className='md:text-center font-semibold text-base md:text-2xl mb-6 md:mb-10 mt-8 md:mt-0'>LET'S START WITH EXPLORING REAL ESTATE OPTIONS</h2>
            <div className='flex justify-center'>
                <div className='flex flex-row overflow-x-auto  gap-6  cursor-pointer'>
                    {cardData.map((card, index) => (
                        <Card key={index} imageUrl={card.imageUrl} heading={card.heading} />
                    ))}
                </div>
            </div>
        
                <div className="flex justify-center mt-6">
                    <button  className="px-2 py-1 md:px-4 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View All</button>
                </div>
          
        </div>
    );
}

export default ExploreServices;
