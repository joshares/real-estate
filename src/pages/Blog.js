import React from 'react'
import datas from '../blogData'
import { useState } from 'react'
import Post from '../component/Posts'


const Blog = () => {
 const [data, setData] = useState(datas)

 return (
  <main className='blog-main'>
   <h2>Real Estate Blogs Every Realtor Should Read</h2>
   <div>{data.map((item, index) => {
     return (
      <Post {...item} index={index}/>
     )
   })}</div>
  </main>
 )
}

export default Blog