'use client'

import React from 'react'
import img  from '../../../public/faq/placeholder_article.png';
import Image from 'next/image';
import { useEffect } from 'react';
const ArticleCard = ({
    date,
    title,
    index
}) => {
   useEffect(() => {
   
   }, [])
  return (
    <div className=' relative  w-[300px] h-full self-stretch min-h-[200px]'>
      <Image src={img} alt='artcle cover' className='w-full'/>
      <div className='py-2'>
      <p className='font-semibold text-black'>{title}</p>
      <p className='text-neutral-500 text-sm font-medium '>{date}</p>
      </div>
    </div>
  )
}

export default ArticleCard
