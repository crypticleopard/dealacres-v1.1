import React from 'react'
import styles from "./page.module.css"
import ExploreBuilder from '@/components/AllDevelopers/ExploreBuilder'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import Sidebar from '@/components/AllDevelopers/Sidebar'
import Explore from '@/components/Homepage/explore/Explore'
import Link from 'next/link'
import ReadMoree from '@/components/developer/ReadMoree'

const page = () => {
  return (
    <div>
      <p className={styles.heading}>
        <Link href="/">Home</Link> {' > '}
        <Link href="/allDevelopers">Top Builder in Gurgaon</Link>
      </p>
      <h2 className={styles.title}>Explore Top Builders in Gurgaon</h2>
      <div className={styles.Layout}>
        <div className={styles.mainContainer}>
          <ExploreBuilder />
        </div>
        <div className={styles.Sidebar}>
          <SideContentContainer Addbox={true} />
          <Sidebar />
        </div>
      </div>


      <div className='mx-[8rem] mb-10' >
        <ReadMoree />

        <Explore />
      </div>

    </div>
  )
}

export default page
