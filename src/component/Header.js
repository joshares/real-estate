import React from 'react'
import { useState } from 'react'
import headerOne from '../images/header-img.png'
import headerTwo from '../images/hero-img.png'
import List from './List'
import {Link} from 'react-router-dom'



const Header = () => {
 const [open, setOpen] = useState({one:false,two:false,three:false,four:false})
 
 const handleClick = () => {
  setOpen()
 }
 return (
  <main className='header-main'>
   <section className=' first-header'>
    <div className='first-notes'>
     <h1>Helping people get their dream home</h1>
     <p>We provide a complete service of sale, purchase or rental of real estate property</p>
     <div className='buttons'>
      <Link className='btn blue-btn' to='/property'>
       Get started
      </Link>
      <a className='btn white-btn' href='#note'>
       Learn more
      </a>
      {/* <buttonS className='btn white-btn' >learn More</button> */}
     </div>
    </div>
    <div className='header-image'>
     <img alt='img' src={headerOne} className='header-img'/>
    </div>
   </section>
   <section className='hero flex'>
    <div className='image-two'>
     <img src={headerTwo} alt='img' className='hero-img'/>
    </div>
    <div id='note' className='second-notes'>
     <h3>Why you should buy your dream house from use?
     </h3>
     <p className='note'>we guarantee the quality and safety of your place, comfort is definitely the main thing for us.</p>
     <div className='list-main'>
      <List open={open} handleClick={handleClick}/>
     </div>
    </div>
   </section>
  </main>
 )
}

export default Header