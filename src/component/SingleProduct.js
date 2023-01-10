import React from "react";

const SingleProduct = ({prop_type,  beds, baths, address,photos,homevalue_web_url,agent}) => {

 const   addy = address.line
 // const  name = agent.name

 return(
  <div>{addy}</div>
 )
}

export default SingleProduct