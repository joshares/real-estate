import React from "react";
import { useState } from "react";
import { useProductsContext } from "../context/product_context";



const FilterProduct = ({name, index,active,handleClick}) => {
 

 return (
     <p className={`${active === index ? 'active-list' : null }`}
     onClick={() => handleClick(index)} id={name}>
      {name}
     </p>
 )
}

export default FilterProduct