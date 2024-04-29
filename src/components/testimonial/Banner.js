import React from 'react'
import Image from 'next/image';
import testimony from "../../../public/testimonial/testimony.webp"
import styles from "./banner.module.css"


const Banner = () => {
  return (
    <div >
      <Image 
  src={testimony}

  className={styles.Banner}
/>

      <h1 className={styles.Title}>TESTIMONIAL</h1>
    </div>
  )
}

export default Banner
