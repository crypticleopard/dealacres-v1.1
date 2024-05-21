import React from 'react'
import housebg from '../../../public/single-website/living-area.jpg'
import Image from 'next/image'
import Link from 'next/link'
const HeroSection = () => {
    return (
        <div className={`max-w-screen min-w-screen flex justify-end  h-[400px] relative  `}>
            <div className='w-full h-full relative'>
                <Image src={housebg} className='absolute w-full h-full object-cover ' alt={"House Image"} />

            </div>
            <div className={`
            z-10 text-white font-bold text-3xl 
            absolute bg-transparent min-h-[40%] max-w-sm p-4 

            h-[150px] top-[50%] -translate-y-[50%] right-[50%] translate-x-[50%] md:translate-x-[10%] md:right-[10%]
            after:absolute after:inset-0 after:bg-black
             after:opacity-[0.7] after:-z-10 text-center after:rounded after:shadow
            flex items-center md:items-start
            `}>

                <h3 className='font-bold pb-2 px-2 border-b border-b-gray-300'>
                    Best Property Dealer in Hisar
                </h3>
               

            </div>
        </div>
    )
}

export default HeroSection
