import Image from 'next/image';
import React from 'react'


const PostCard= ({
    title,
    img
}) => {
  return (
    <div className='p-2 border border-b-gray-700 '>
      
      <div className='flex gap-5  '>
        <div className='min-w-[100px] max-w-[100px] relative'>

            <Image alt={title} width={100} height={100} className='w-full' src={`/blog/${img}`} />
        </div>
       

        <div className='text-[0.94rem] leading-5'>
        {title}
        </div>
      </div>
    </div>
  )
}

export default PostCard
