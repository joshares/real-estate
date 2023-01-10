import {
 GET_PRODUCT_BEGIN,
 GET_PRODUCT_SUCCESS,
 GET_SINGLE_PRODUCT_BEGIN,
 GET_SINGLE_PRODUCT_SUCCESS,
 GET_FILTERED_CONDO_SUCCESS,
 GET_FILTERED_MULTI_SUCCESS,
 GET_FILTERED_SINGLE_SUCCESS,
 GET_FILTERED_ALL_SUCCESS,
 GET_ERROR,
} from '../action'




const product_reducer = (state,action) => {
  if(action.type === GET_PRODUCT_BEGIN){
   return{...state, product_loading:true}
  }
  if(action.type === GET_PRODUCT_SUCCESS){
   const featured_product = action.payload.slice(0,9)
   
   return {
    ...state,
    product_loading:false,
    product: action.payload,
    filtered_product:action.payload,
    featured_product,
    }
  }
  if(action.type === GET_SINGLE_PRODUCT_BEGIN){
   return{...state, single_loading:true}
  }
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
   return{
    ...state, 
    single_loading:false,
    single_product:action.payload,
  }
  }
  if(action.type === GET_FILTERED_CONDO_SUCCESS){
    const temp = state.product.filter((p) => p.prop_type === "condo" )
    return {
      ...state,
      filtered_product: temp,
      product_loading:false,
    }
  }
  if(action.type === GET_FILTERED_SINGLE_SUCCESS){
    const temp = state.product.filter((p) => p.prop_type === "single_family" )
    return {
      ...state,
      filtered_product: temp,
      product_loading:false,
    }
  }
  if(action.type === GET_FILTERED_MULTI_SUCCESS){
    const temp = state.product.filter((p) => p.prop_type === "multi_family" )
    return {
      ...state,
      filtered_product: temp,
      product_loading:false,
    }
  }
  if(action.type === GET_FILTERED_ALL_SUCCESS){
    const temp = state.product
    return {
      ...state,
      filtered_product: temp,
      product_loading:false,
    }
  }
  if(action.type === GET_ERROR){
    return {
      ...state,
      product_loading:false,
      product_error:true,
    }
  }
}

export default product_reducer