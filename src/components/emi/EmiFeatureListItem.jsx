import Image from 'next/image'
import React from 'react'

const EmiFeatureListItem = ({
    label,
    text,
    img
}) => {
  return (
    <div className='w-full h-full flex gap-4 items-center'>
      <div className='max-w-[70px] max-h-[70px] w-full  h-full'>
        <Image width={50} height={50} src={`/emi/${img}`} alt={label} className='w-full  h-[70px] max-h-full object-contain'/>
      </div>
      <div className='text-base'>
        <h3 className='inline font-bold '>
            {label}{": "}
        </h3>
        <p className='inline '>
            {text}
        </p>
      </div>
    </div>
  )
}

export default EmiFeatureListItem
