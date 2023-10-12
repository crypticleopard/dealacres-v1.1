"use client"
import React, {useState} from 'react'
import styles from "./explorebuilder.module.css"
import Image from 'next/image'

import data from "./dummyData.js"

const ExploreBuilder = () => {
    const [limit, setLimit] = useState(8);
    const filteredData = data["Property"].slice(0, limit);
    const [project, setProject] = useState("Residential");
    const [projectLimit, setProjectLimit] = useState(4);

    let toggleProjects = () => {
      if (projectLimit >= 6) {
        setProjectLimit(4);
      } else {
        setProjectLimit(6);
      }
    };

    const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const maxLength = -1;

  return (
    <div className={styles.ExploreBuilder}>
        {filteredData.map((dt, index) => (
      <div className="mt-12">
        <div className={styles.TopBuilders}>
            <div className={styles.Logo}>
            <Image
                src={dt.builderLogo}
                alt={dt.builderName}
            />
            </div>
            <div>

            <h3>{dt.builderName}</h3>
            
            <p>{isTruncated ? (dt.description.slice(0, 210)) : (  dt.description )}
            
            <span className={styles.SeeMore} onClick={toggleTruncate} >{isTruncated ? " Read More" : " Read Less"}</span>
            </p>

        </div>
        </div>
        
        <div className={styles.ProjectCategory}>
            <div>
                <span onClick={()=>{
                    setProject("Residential")
                }}><strong>Residential Projects</strong> </span>

                <span onClick={() => {
                    setProject("Commercial")
                }}><strong>Commercial Projects</strong></span>
            </div>
            <div className={styles.projectLine}>
                {/* Featured start */}
                {dt[project].slice(0, projectLimit).map((property, index) => (
            <div key={index} className={styles.Projects}>
                <div>
                    <Image 
                        src={property.projectImg}
                        alt={property.ProjectName}
                    />
                </div>
                <div>
                    <h4>{property.ProjectName}</h4>
                    <p>by {property.group} </p>
<p>{property.address}</p>
<strong>{property.price}</strong>
                </div>

                </div>

                )) }
<div className={styles.ViewAll}>
    <button onClick={toggleProjects}> {(projectLimit<=4)? " View All "+ project + " Projects" : "View Less" }</button></div>

                {/* featured close */}

            </div>
        </div>


             </div>

))}
    </div>
  )
}

export default ExploreBuilder