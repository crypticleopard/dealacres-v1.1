import React from 'react'
import styles from './invest.module.css'
import Image from 'next/image'

const InvestmentGuideCard = ({
    src,
    title,
    content
}) => {
  return (
    <div className={`${styles.investmentGuideCard} shadow-md flex flex-col items-center justify-center  min-[510px]:w-[230px] md:h-[300px] px-2 py-4 rounded-2xl border-r-2 border-r-black border-b gap-4 border-b-black hover:border-l-2 hover:border-l-black  bg-white`}>
        <div className='overflow-hidden rounded-full transition-all'>
      <Image src={src} alt={title} className='rounded-full h-[100px] 
      hover:scale-[1.3] transition-all w-[100px] border border-blue-300 shadow' />

        </div>
      <div className='font-bold text-base text-center peer py-4 hover:cursor-pointer'>
        {title}
      </div>
      <p className='md:hidden md:opacity-0 text-sm transition-opacity delay-100 ease-in-out duration-500 content-shown peer-hover:block peer-hover:opacity-100 text-center'>
        {content}
      </p>
    </div>
  )
}

export default InvestmentGuideCard
