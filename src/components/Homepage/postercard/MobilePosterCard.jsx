"use client"
import React, { useState } from 'react'
import styles from './postercard.module.css'
import Image from 'next/image'


const MobilePostercard = (props) => {


  const [showInputField, setShowInputField] = useState(false)

  return (
    <div className="relative flex flex-col gap-2 my-8 px-4">

      <div className='font-bold text-xl'>{props.title}</div>
      <p className=' absolute text-[10px] right-[4%] top-[10%] px-2 py-1 rounded-md font-bold  bg-blue-700 text-white'>{props.sidecontent1}</p>

      <div  >
        <Image
          src={props.src}
          alt={props.alt}
          className="object-cover w-full h-[25vh] rounded-lg"
        />
      </div>




      <h3 >{props.sidecontent2}</h3>
      <span><h4 className='font-bold'>{props.sidecontent4}<span>{props.s2spantext}</span></h4></span>
      <div className='flex flex-row items-center'>

        <h6 className='text-xs'>{props.sidecontent3}</h6>
        
          <div className='w-[200px]'>
          <div className='flex justify-end mx-auto'>
            {showInputField && (
              <div className={styles.inputField}>
                <input placeholder={props.buttontext} />
                <button className={styles.btn2}>Submit</button>
              </div>
            )}
            {!showInputField && (
              <button className={styles.mobilebtn1} onClick={() => setShowInputField(true)}>{props.buttontext}</button>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default MobilePostercard