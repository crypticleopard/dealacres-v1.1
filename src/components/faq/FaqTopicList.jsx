'use client'

import React from 'react'
import { useState } from 'react'

const FaqTopicList = ({
    title,
    lists,
    hasBorder,
    isGrid
}) => {
   

    const [showFull, setShowFull] = useState(false)
  return (
    <div className={` ${hasBorder && 'border-r border-black'}  ${isGrid && 'px-8' }
    py-4
    lg:py-8`}>
      { title && <div className='font-bold text-2xl py-4 '>
        {title}
      </div>}
      <ul className='list-disc font-bold pl-4'>
        {
            lists.map((item, index) => {

                if(index < (Math.floor(lists.length / 2)) || showFull ){
                return (
                    <li key={index} className='py-1 text-base'>{item}</li>
                )
                }
            })
        }
      </ul>
      <button className='text-blue-500 underline'
      onClick={() => setShowFull(prev => !prev)}>{!showFull ? Math.ceil(lists.length / 2) + " more questions" : 'Show Less' } </button>
    </div>
  )
}

export default FaqTopicList
