'use client'

import React, { useEffect } from 'react'
import PostSection, { PostSectionProps } from './PostSection';
import PostHeader from './PostHeader';
import PublishedOn from './PublishedOn';
import Image from 'next/image';



const  BlogPost = ({
  postData
}) => {

  const { heading, postIntro, publishedOn, img, sections,  } = postData;




  return (

    <div className='px-4  flex flex-col font-light  '>
      <PostHeader heading={heading} align='left' size='large' />

      <PublishedOn date={publishedOn} align='left' />

      <div className="text-justify text-md" dangerouslySetInnerHTML={{ __html: postIntro }}></div>

      <div className='py-4'>
        <Image src={`/blog/${img}`} alt='post cover' width={500} height={180} className='w-full h-96'  />
      </div>


      <div>
        {sections.map((section, index) => {
          return (
            <PostSection
              title={section.title}
              content={section.content}
              img={section.img}
              isList={section.isList}
              isItalic={section.isItalic}
              lists={section.lists}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BlogPost
