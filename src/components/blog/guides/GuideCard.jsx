import Image from 'next/image';
import React from 'react'
import styles from './styles.module.css'


const GuideCard = ({
    title,
    bgColor,
    borderColor,
    img,
    textColor,
    variableWidth
}) => {





    const noOfWordsInTitle = title.split(' ').length;
  


    return (
        <div className={`${!variableWidth ? styles.guideCard : 'w-full h-full min-[1520px]:justify-center' } col-span-1 flex flex-col gap-6 items-center shadow-lg bg-${bgColor} border-l-[10px] border-l-${borderColor} py-2 px-3`}
            style={{
                backgroundColor: bgColor,
                borderLeftColor: borderColor
            }}
        >
            <div className='font-bold text-xl 2xl:text-2xl py-1 '>
                {
                    title.split(' ').map((word, index) => {
                        if (index == noOfWordsInTitle - 1) {
                            return ""
                        } else {
                            return word + " "
                        }
                    }
                    )
                }
                <br />
                <span className={``} style={{
                    color: textColor
                }}>
                    {
                        title.split(' ')[noOfWordsInTitle - 1]
                    }
                </span>
            </div>

            <Image src={`/guides/${img}`} alt={title} width={80} height={50} className='w-[80px] ' />
        </div>
    )
}

export default GuideCard
