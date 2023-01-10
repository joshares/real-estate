import React from "react";
import Category from "./Category";
import Loading from "./Loading";
import {Link} from 'react-router-dom'
import { useProductsContext } from "../context/product_context";
import Error from "./Error";


const Featured = () => {
 const {
  featured_product:featured,
  product_loading: loading,
  product_error:error,
 } = useProductsContext()



 
 if(loading){
  return <Loading/>
 }
 if(error){
  return <Error/>
 }
 return (
  <main className="featured-main">
  <h3>Recently added featured properties</h3>
  <div className="cat-list ">
   <p>NEW APARTMENTS</p>
  </div>
  <div  className="underline show"></div>
  <div className="grid">
   {featured.map((item, id) => {
    return(
     <Category {...item} />
    )
   })}
  </div>
  <div className="center">
   <Link to='/property' className="blue-btn btn ">View more</Link></div>
  </main>
 )
}

export default Featured;