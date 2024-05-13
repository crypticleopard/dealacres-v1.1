'use client'

import React, { useState } from 'react'
import { GrFormAdd } from 'react-icons/gr'

import styles from './invest.module.css'
const FaqListItem = ({
  question
}) => {

  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <li className='border border-blue-200 py-2  list-none overflow-hidden '>
      <div className='font-medium text-lg flex items-center gap-2'>
        <span className='' onClick={() => setShowAnswer(prev => !prev)}>
          <GrFormAdd size={25} />
        </span>
        <div>
          {question}

        </div>
      </div>

      {

        <div className={`hidden ${showAnswer ? styles.answer : ''}`}>
          This is a sample answer.
        </div>
      }


    </li>
  )
}

export default FaqListItem
