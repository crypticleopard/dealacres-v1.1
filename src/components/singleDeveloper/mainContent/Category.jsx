import styles from './category.module.css'
import Image from 'next/image'

function Category() {
  return (
    <div className={styles.categoryContainer}>
        <h1>Explore Magnificent Project By <span className='text-7xl'> M3M</span> India Pvt. Ltd</h1>
        <div className={styles.categoryContentContainer}>
            <div className={styles.categoryImgContainer}>
                <Image
                    src='/singleDeveloper/CommercialProjectsImg.webp'
                    alt='Commercial Projects'
                    layout='fill'
                    style={{objectFit:'cover'}}
                />
                      <h6>Commercial Projects</h6>
            </div>
      
        </div>
        <div className={styles.categoryContentContainer}>
            <div className={styles.categoryImgContainer}>
                <Image
                    src='/singleDeveloper/ResidentialProjectsImg.webp'
                    alt='Residential Projects'
                    layout='fill'
                    style={{objectFit:'cover'}}
                />
                      <h6>Residential Projects</h6>
            </div>
  
        </div>
    </div>
  )
}

export default Category