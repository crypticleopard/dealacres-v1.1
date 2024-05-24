import React from 'react'
import bg from '../../../public/emi/emi_banner.webp'
import Image from 'next/image'
const EmiBanner = () => {
  return (
    <div className='h-[300px] relative '>
  
        <Image src={bg} alt='Emi calculator' className='object-cover h-5/6'/>
   
      <div className='absolute inset-0 flex items-center justify-end pr-8'>
       <h1 className='font-bold text-6xl'>
       EMI Calculator
       </h1>
      </div>
    </div>
  )
}

export default EmiBanner
