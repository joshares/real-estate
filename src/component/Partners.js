import React from "react";
import abeg from '../images/abeg.svg'
import acumen from '../images/acumen.svg'
import access from '../images/access.svg'
import hotel from '../images/hotel.svg'
import printino from '../images/printivo.svg'



const Partner = () => {
 return (
  <main className="partner">
   <h4 className="partner-title">Our Partnerships</h4>
   <div className="partner-main flex">
   <img src={abeg} alt="img" className="partners-logo"/>
   <img src={hotel} alt="img" className="partners-logo"/>
   <img src={printino} alt="img" className="partners-logo"/>
   <img src={access} alt="img" className="partners-logo"/>
   <img src={acumen} alt="img" className="partners-logo"/>
  </div>
  </main>
 )
}

export default Partner;