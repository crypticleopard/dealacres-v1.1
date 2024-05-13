'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeadingBorder from './HeadingBorder'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";


const AgentHeroSection = ({
  img,
  name,
  contacts,
  address,
  languages,


}) => {

  const [mMode, setMMode] = useState('');
  const router = useRouter();

  const handleContactClick = (value) => {
    console.log(mMode)
    setMMode(value)
  }
  const handleGetIntoTouch = (value) => {
    router.push(`/meetings/schedule?mode=${mMode}`)
  }

  return (
    <div className='w-full h-[30rem] md:w-[85%] mx-auto grid grid-cols-4 md:grid-cols-3 bg-[#334257] rounded-3xl shadow '>

      <div className='text-white  col-span-2'>
        <div className='py-8 px-2 md:px-6 flex flex-col md:justify-between h-full gap-2 md:gap-8'>
          <div className='text-left'>
            <h2 className='inline-flex w-2/5 flex-col text-xl md:text-4xl font-bold   '>
              {name}
              <div className='flex justify-start' >
                <HeadingBorder />

              </div>
            </h2>
            <p className='text-sm sm:text-base md:text-lg'>
              {contacts.map((contact, index) => (<span key={index}>{contact}</span>))}
            </p>
            <p className='font-bold text-sm sm:text-base md:text-lg'>
              {languages.map((language, index) => (<span key={index}>
                {language + ' '}</span>))}
            </p>

            <p className='text-sm sm:text-base md:text-lg pt-4'>
              {address}
            </p>
          </div>

          <div className='flex flex-col gap-4 items-start '>
            <p className='text-base md:text-lg font-bold'>
              Meet with Sanya Bansal
            </p>
            <div className='flex flex-row gap-4 md:gap-8 accent-green-500 text-xs md:text-base'>
              <div className='flex flex-row gap-2'>
                <input type="radio" id='inperson' name='mode' value={'inPerson'} onClick={() => handleContactClick('inPerson')} />
                <label htmlFor="inperson">
                  In Person
                </label>
              </div>
              <div className='accent-green-500 flex flex-row gap-2 '>
                <input type="radio" id='video' name='mode' value={'videoChat'}
                  onClick={() => handleContactClick('videoChat')} />
                <label htmlFor="video">
                  Video Call
                </label>
              </div>
            </div>
            <span className='w-full sm:w-auto py-2 px-4 bg-blue-600 text-white text-center font-bold text-base sm:text-lg md:text-xl cursor-pointer sm:inline-flex ' onClick={() => handleGetIntoTouch()}>
              Get In Touch
            </span>
            <div className='flex flex-row gap-2 items-center mb-1'>
          <p className='font-bold text-lg'>Follow us {`-`}</p>
          <div className='flex flex-row gap-2 items-center'>
          <FaFacebook className='w-5 h-5'/>
          <FaTwitterSquare className='w-5 h-5'/> 
           <FaSquareInstagram className='w-5 h-5'/> 
            <FaSquareYoutube className='w-5 h-5'/> 
          <IoLogoLinkedin className='w-5 h-5'/>  
          <IoIosGlobe className='w-5 h-5'/>
          </div>
          </div>
          </div>
      
        </div>
       

      </div>

      <div className='md:order-2 sm:relative rounded-3xl h-[100%] w-full sm:h-[88%] col-span-2 md:col-span-1 md:after:absolute after:w-[100%] after:h-[101%] after:bg-white after:right-2 after:rounded-3xl after:top-1 py-4 md:py-0 '>
        <Image src={`/about-us/${img}`} className='rounded-3xl mx-auto sm:mx-0 h-[400px]  w-auto sm:w-full sm:h-full  object-cover sm:absolute  z-10' width={300} height={300} />
      </div>
    </div>
  )
}

export default AgentHeroSection
