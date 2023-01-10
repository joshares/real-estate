import React from "react";
import { useState } from "react";
import {CiCreditCard1} from 'react-icons/ci'
import {BiDollar} from 'react-icons/bi'
import {HiOutlineBuildingLibrary} from 'react-icons/hi2'
import {MdOutlineCenterFocusWeak} from 'react-icons/md'
import {SlArrowDown, SlArrowUp} from 'react-icons/sl'

const List = ({ handleClick}) => {
  const [open, setOpen] = useState({one:false,two:false,three:false,four:false})

 const handleOne = () => {
  setOpen({one:!open.one})
 }
 const handleTwo = () => {
  setOpen({two:!open.two})
 }
 const handleThree = () => {
  setOpen({three:!open.three})
 }
 const handleFour = () => {
  setOpen({four:!open.four})
 }

 const answers = [
  'Swift and easy payment is guaranteed.We also offer payment packages and discounts',
  'Our customers enjoy tax benefits and reduction from sales, rent and purchases',
  'We provide the best insurance avaible in the market on properties purchased or rented',
  'The prices we provide are affordable prices and satisfactory quality. Strategic place and easy to reach'

 ]
 return (
  <div className="list-alt">
   <div >
    <div className="dream-list">
     <CiCreditCard1 className="list-icon"/>
    <p className="list-header">Easy payment method</p>
    {
     !open.one ? (
      <SlArrowDown onClick={handleOne} className="arrow"/>
     ) : (
      <SlArrowUp onClick={handleOne} className='arrow'/>
     )
    }
    </div>
    {
     open.one ? (
      <p className="">{answers[0]}</p>
     ) : null
    }
   </div>
   <div >
    <div className="dream-list">
    <BiDollar className="list-icon"/>
    <p className="list-header">tax advantage</p>
    {
     !open.two ? (
      <SlArrowDown onClick={handleTwo} className="arrow"/>
     ) : (
      <SlArrowUp onClick={handleTwo} className='arrow'/>
     )
    }
   </div>
    {
     open.two ? (
      <p className="">{answers[2]}</p>
     ) : null
    }
   </div>
   <div >
    <div className="dream-list">
    <HiOutlineBuildingLibrary className="list-icon"/>
    <p className="list-header">Property insurance</p>
    {
     !open.three ? (
      <SlArrowDown onClick={handleThree} className="arrow"/>
     ) : (
      <SlArrowUp onClick={handleThree} className='arrow'/>
     )
    }
   </div>
    {
     open.three ? (
      <p className="">{answers[2]}</p>
     ) : null
    }
   </div>
   <div >
    <div className="dream-list">
    <MdOutlineCenterFocusWeak className="list-icon"/>
    <p className="list-header">Best price with satisfactory quality</p>
    {
     !open.four ? (
      <SlArrowDown onClick={handleFour} className="arrow"/>
     ) : (
      <SlArrowUp onClick={handleFour} className='arrow'/>
     )
    }
   </div>
    {
     open.four ? (
      <p className="">{answers[3]}</p>
     ) : null
    }
   </div>
   
   
   
  </div>
 )
}


export default List