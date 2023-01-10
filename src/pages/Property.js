import React from "react";
import Category from "../component/Category";
import { useState } from "react";
import Loading from "../component/Loading";
import { useProductsContext } from "../context/product_context";
import FilterProduct from "../component/FilterProducts";
import Error from "../component/Error";


const Property = () => {
   const [active, setActive] = useState(0)
 const {
  filtered_product:product,
  product_loading: loading,
  product_error: error,
  filterCondo,
  filterMulti,
  filterSingle,
  filterAll,
 } = useProductsContext()

 const handleClick = (index) => {
   setActive(null)
   if(index === 3){
    filterMulti()
   }
   if(index === 2){
    filterSingle()
   }
   if(index === 1){
    filterCondo()
   }
   if(index === 0){
    filterAll()
   }
   setActive(index)
  }


 const datas = [
 'All',
 'Condo Apartment',
 'Single Family Apartment',
 'Multi Family Apartment',
]
 const [data, setData] = useState(datas)
 if(loading){
  return <Loading/>
 }
 if(error){
  return <Error/>
 }
 return (
  <main className="featured-main property-main">
  <h3>Properties available</h3>
  <div className="cat-list">
   {data.map((name, index) => {
    return(
     <FilterProduct
     active={active}
      handleClick={handleClick} setData={setData} index={index} name={name}/>
    )
   })}
  </div>
  <div className="underline show"></div>
  <div className="grid">
   {product.map((item, id) => {
    return(
     <Category {...item} />
    )
   })}
  </div>
  
  </main>
 )
}

export default Property;