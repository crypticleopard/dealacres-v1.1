import Image from 'next/image'
import React from 'react'
import banner from '../../../public/invest/team_work.webp'
import styles from './invest.module.css'
import Clouds from './Clouds'

const InvestBanner = () => {
  return (
    <div className={`${styles.investBanner}  rounded-xl shadow-md my-4 flex flex-col sm:flex-row justify-around items-center bg-blue-100 py-8 px-4`}>
        <Clouds/>
        <h1 className='text-3xl sm:text-4xl font-normal '>
            Invest with  <span className='font-bold text-blue-600'> Deal Acres </span>
        </h1>
        <div className='w-1/2 sm:w-1/4 h-full'>

        <Image src={banner} alt='teamwork image.' className=''/>
        </div>
      
    </div>
  )
}

export default InvestBanner
