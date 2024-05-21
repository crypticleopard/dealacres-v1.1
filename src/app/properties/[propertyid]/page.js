import styles from './page.module.css'
import { data } from './dummydata'
import Navbar02 from "@/components/property/navbar2/Navbar02"
import ImageContainer from '@/components/property/imagecontainer/ImageContainer'
import MainContentContainer from '@/components/property/maincontentcontainer/MainContentContainer'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import FAQ from '@/components/property/maincontentcontainer/FAQ'
import LeaveReview from '@/components/property/maincontentcontainer/LeaveReview'
import PropertyBuilder from '@/components/property/PropertyBuilder'
import SimilarProject from '@/components/property/SimilarProject'
import ReadMoreProperty from '@/components/property/ReadMoreProperty'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'


async function Property(params) {

  const id = params.params.propertyid

  return (
    <>
      <Navbar02 />
      <div className={styles.propertyContainer}>
        <ImageContainer imageData={data.imageContainer} floorPlan={true} imageButtonPosition="imageButtonClass1" />
        <div className={styles.contentContainer}>
          <div className={styles.leftColumn}>
            <MainContentContainer content={data.mainContent} />
          </div>
          <div className={styles.rightColumn}>
            <SideContentContainer title={data.mainContent.title} />
          </div>
        </div>
      </div>


      <div className={styles.bottomContainer} id='#Properties By Builder'>
        <div>
          <PropertyBuilder />
        </div>
        <div>
          <SimilarProject />
        </div>
        <div>
          <h1>Frequently Asked questions</h1>
          <FAQ faqdata={data.mainContent.FaqData} />
        </div>
        <ReadMore isFullScreen={true}/>


        <div>
          <h1>Leave a review</h1>
          <LeaveReview />
        </div>
        <p className='text-sm mb-10'>The material and information contained herein is for general informational purposes only, and does not constitute an endorsement/warranty/ representation/offer from Dealacres.com.<br />
          Sources of Information {`:`} Project details presented on this page are collected from public sources including State RERA websites {`(`}wherever applicable{`)`}, project websites created by builder and authorized channel partners and official documentation shared by these authorized advertisers {`(`}project brochure, price list, payment plans{`)`}.</p>
      </div>
    </>
  )
}

export default Property