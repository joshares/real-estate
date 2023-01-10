import React from "react";

const Post = ({name,best,details,link, index}) => {
 return(
  <main className="post-main">
   <h3><strong>{index + 1}. </strong><span className="blog-name">{name}</span></h3>
   <p><strong>Best for: </strong> {best}</p>
   <p className="blog-details">{details}</p>
   <p><strong>Must-read post: </strong><span><a href={link} className='blog-link'>What You Need To Know</a></span></p>
  </main>
 )
}

export default Post