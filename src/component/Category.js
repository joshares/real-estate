import React from "react";
import { Link } from "react-router-dom";
import {GrLocation} from 'react-icons/gr'
import bedroom from '../images/bedroom.svg'
import bath from '../images/bathroom.svg'
import right from '../images/rightangle.svg'

const Category = ({prop_type,  beds, baths, address,photos,photo, building_size,property_id:id}) => {
 const addy = address.line
 const size = building_size.size
 const img = photos[0].href
 const imgX = img.slice(0,-5)
 const adjustWidth = 'x_l.jpg'
 const image = `${imgX}${adjustWidth}`
 // const image = photo.href

// const cat = new Set(prop_type)
// console.log(prop_type)
// console.log(cat)
 return (
  <main className="category-main">
   <div>
    <Link to={`/property/${id}`} >
    <img src={image}  className="house-img" alt="img" />
    </Link>
   </div>
   <div className="cat-details">
    <h6>{prop_type} apartment</h6>
    <div className="flex cat-location ">
     <GrLocation className="location-icon"/>
     <p>{addy}</p>
    </div>
    <div className="underline"></div>
    <div className="flex cat-icons">
     <p><span><img src={bedroom} alt='img'/></span> {beds} Bed</p>
     <p><span><img src={bath} alt='img'/></span> {baths} Bathroom</p>
     <p><span><img src={right} alt='img'/></span> {size}sq </p>
    </div>
   </div>
  </main>
 )
}

export default Category