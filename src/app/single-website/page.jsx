"use client"
import HeroSection from '@/components/single-website/HeroSection'
import WelcomeSection from '@/components/single-website/WelcomeSection'
import React from 'react'
import src1 from '../../../public/single-website/parking.webp'
import src2 from '../../../public/single-website/hall.webp'
import FindYourPerfectHome from '@/components/single-website/FindHome'
import FindHome from '@/components/single-website/FindHome'

import { CiLocationOn } from 'react-icons/ci'
import { IoIosHome } from 'react-icons/io'
import { RiHomeSmile2Fill } from 'react-icons/ri'
import houseSecure from '../../../public/single-website/house-secure.png'
import { BsDiamondFill } from 'react-icons/bs'
import Image from 'next/image'
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6'
import BlogsAndNews from '@/components/single-website/BlogsAndNews'
import ProjectListings from '@/components/single-website/ProjectListings'
import SingleContactForm from '@/components/single-website/SingleContactForm'
const SingleWebsite = () => {
  return (
    <div>
      <div className=''>
        <HeroSection />
      </div>

      <div className='max-w-screen-lg mx-auto px-4 py-8'>
        <WelcomeSection />
      </div>

      <FindHome img={src1} />
      <div className='bg-[#1A4789]'>
        <div className="max-w-screen-lg mx-auto text-white font-bold  flex justify-around py-4 ">

          <div className='flex flex-col gap-4  items-center'>
            <span className="rounded-full flex justify-center items-center p-4 border-2 border-white ">

              <BsDiamondFill size={30} />
            </span>
            <span className='text-center text-lg'>
              Luxury House
            </span>


          </div>
          
          <div className='flex flex-col gap-4 items-center'>
            <span className="rounded-full flex justify-center items-center p-4 text-white border-2 border-white  ">

              <FaLocationDot size={30} />
            </span>
            <span className='text-center text-lg'>
              Best Location
            </span>


          </div>
          <div className='flex flex-col gap-4 items-center'>
            <span className="rounded-full flex justify-center items-center p-4 border-2 border-white ">

              <IoIosHome size={30} />
            </span>
            <span className='text-center text-lg'>
              Good Price
            </span>


          </div>
          <div className='flex flex-col gap-4 items-center'>
            <span className="rounded-full flex justify-center items-center p-4 border-2 border-white  ">

              <Image src={houseSecure} className='w-[30px] h-[30px] object-cover' alt='House Caring '/>
            </span>
            <span className='text-center text-lg'>
              Luxury House
            </span>


          </div>

        </div>

      </div>

      <div className='max-w-screen-lg mx-auto px-4 py-2'>
        <div className='text-center pb-8 pt-7'>
          <h2 className='font-bold text-4xl px-4'>
            Recommended Project
          </h2>
          <p className='text-base pt-1'>
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
          </p>
        </div>
        <ProjectListings/>
      </div>

      <FindHome img={src2} />

      <div className='max-w-screen-lg mx-auto px-4'>
        <BlogsAndNews/>
      </div>
      
      <SingleContactForm/>
    </div>
  )
}

export default SingleWebsite
