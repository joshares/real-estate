import React from 'react'
import Header from '../component/Header'
import Featured from '../component/featuredProducts'
import Partner from '../component/Partners'
import Testimonial from '../component/testimonial'
import Footer from '../component/Footer'

const Home = () => {
 return (
  <main>
   <Header/>
   <Featured/>
   <Partner/>
   <Testimonial/>
   <Footer/>
  </main>
 )
}

export default Home