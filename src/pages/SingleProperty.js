import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/product_context'
import bedroom from '../images/bedroom.svg'
import bath from '../images/bathroom.svg'
import Loading from '../component/Loading'
import SingleProduct from '../component/SingleProduct'

const singleUrl = 'https://realty-in-us.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id='

 


const SingleProperty = () => {
 const {id} = useParams()
 const {
  single_product:product,
  single_loading: loading,
  fetchSingleProduct,
 } = useProductsContext()

 useEffect(()=> {
  fetchSingleProduct(`${singleUrl}${id}`)
},[id])


 if(loading){
  return <Loading/>
 }


 const {prop_type,  beds, baths, address,photo,homevalue_web_url,agent, price} = product

const  addy = address.line
const name = agent.name
const office_name = agent.office_name
const email = agent.email
const  img = photo.href
 console.log(product)
 

  return (
   <main className='s-main'>
    <div className='single-main'>
     <section className='single-image'>
     <img src={img} alt='img' className='single-img'/>
    </section>
    <section className='single-details'>
     <div>
      <h3>{prop_type} Apartment</h3>
     <p>{addy}</p>
     <div className='flex single-flex'>
      <p><span><img src={bedroom} alt='img'/></span> {beds} beds</p>
      <p><span><img src={bath} alt='img'/></span> {baths} bathrooms</p>
     </div>
     <p className='btn blue-btn price'>${price}</p>
     </div>
     <div>
      <h3>Agent details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Office:</strong> {office_name}</p>
      <p><strong>Email:</strong><span><a className='blog-link'> {email}</a></span></p>
     </div>
    </section>
    </div>
    <div className=" single-btn center">
   <a target='_blank' href={homevalue_web_url} className="blue-btn btn ">View more</a></div>
   </main>
  )
 
}



export default SingleProperty
