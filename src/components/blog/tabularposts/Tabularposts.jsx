import React from 'react'
import TableHeader from './TableHeader'
// import posts from '@/data/allPostsData.json'
// import articles from '@/data/articlesData.json'
import PostCard from '../PostCard'
import ArticleCard from './ArticleCard'
import Heading from '../Heading'
import styles from './tabular.module.css'

const Tabularposts = ({
  posts,
  articles
}) => {
  return (
    <div className='my-4 bg-[#edf6f7]'>

      {/* <Heading heading='Read More' /> */}
      <div className='= flex gap-4 flex-nowrap lg:grid lg:grid-cols-3 max-w-screen-2xl mx-auto w-full  max-h-[700px]'>
        <div className='max-[768px]:min-w-[80%] my-2 px-4 lg:col-span-1 '>
          <div>

            <TableHeader header='Popular Posts' />
          </div>
          <div className='bg-[#edf6f7] lg:max-h-[400px] '>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>

        </div>

        <div className='max-[768px]:min-w-[80%] my-2 px-4 lg:col-span-1 '>
          {/* Latest Posts do some validation for grabing latest posts through date. */}

          <TableHeader header='Latest Posts' />
          <div className='bg-[#edf6f7] lg:max-h-[450px]'>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>
        </div>

        <div className='max-[768px]:min-w-[80%] my-2 px-4 lg:col-span-1 '>
          {/* Relevant Articles. */}


          <TableHeader header='Relevant Articles' />
          <div className={`lg:max-h-[450px] lg:overflow-y-scroll
          ${styles.articles}
          `}>

            {
              articles.map((article, index) => {
                return (
                  <ArticleCard key={index} title={article.title} img={article.img} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabularposts
