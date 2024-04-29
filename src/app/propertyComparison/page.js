import Explore from '@/components/Homepage/explore/Explore'
import Comparison from '@/components/PropertyComparison/Comparison'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import style from './page.module.css'
import React from 'react'
import Hotspot from '@/components/PropertyComparison/Hotspot'

const page = () => {
  return (
    <div>
        <div className={style.Layout}>
        <Comparison />
          <Hotspot />
          <Explore />
        </div>
    
        <ReadMore />
    </div>
  )
}

export default page
