import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/product_reducer'
import { GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,GET_SINGLE_PRODUCT_SUCCESS,
  GET_FILTERED_CONDO_SUCCESS,
  GET_FILTERED_MULTI_SUCCESS,
  GET_FILTERED_SINGLE_SUCCESS,
  GET_FILTERED_ALL_SUCCESS,
  GET_ERROR,
 } from '../action'


const initialState = {
  product_loading: false,
  product_error: false,
  product: [],
  filtered_product:[],
  featured_product:[],
  single_product: {
    address: {
      line:null,
     },
     agent:{
      name: null,
      email:null,
      office_name:null,
     },
     photo:{
      href: null
    },
  },
  single_loading: false,
  single_error: false,
}

const ProductsContext = React.createContext()

const url = 'https://realty-in-us.p.rapidapi.com/properties/v2/list-sold?offset=0&limit=50&city=New%20York%20City&state_code=NY&sort=sold_date'

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
//first api
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '56b9e20cb6msh7017f6f2e9db3cdp18320djsnbab82513f0e4',
// 		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
// 	}
// };
// second api
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd0f14556c4msh4c435fd90956c18p1bf1f9jsnecf79b5b7447',
// 		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
// 	}
// };
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91a6be971cmshd6a0db1c4d45817p14360ajsn90c9fe8cbf39',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};





const fetchProduct = async(url) => {
      dispatch({type:GET_PRODUCT_BEGIN})
  try{
    const response = await fetch(url, options)
    const data = await response.json()
    // const product = data.properties
    const product = data.properties.filter((t)=> t.building_size !== undefined)
    dispatch({type:GET_PRODUCT_SUCCESS, payload:product})
    console.log(data)
  }catch(err){
    dispatch({type:GET_ERROR})
    console.log(err)
  }
}
const fetchSingleProduct = async(url) => {
      dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
  try{
    const response = await fetch(url, options)
    const data = await response.json()
    const {listing} = data
    dispatch({type:GET_SINGLE_PRODUCT_SUCCESS, payload:listing})
    console.log(listing)
  }catch(err){
    console.log(err)
  }
}

const filterCondo = () => {
  dispatch({type:GET_PRODUCT_BEGIN})
  dispatch({type:GET_FILTERED_CONDO_SUCCESS})
}
const filterSingle = () => {
  dispatch({type:GET_PRODUCT_BEGIN})
  dispatch({type:GET_FILTERED_SINGLE_SUCCESS})
}
const filterMulti = () => {
  dispatch({type:GET_PRODUCT_BEGIN})
  dispatch({type:GET_FILTERED_MULTI_SUCCESS})
}
const filterAll = () => {
    dispatch({type:GET_PRODUCT_BEGIN})
   dispatch({type:GET_FILTERED_ALL_SUCCESS})
}



useEffect(()=> {
  fetchProduct(url)
   // eslint-disable-next-line
},[])


  return (
    <ProductsContext.Provider value={{
     ...state,
     fetchSingleProduct,
     filterCondo,
     filterMulti,
     filterSingle,
     filterAll,
    }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
