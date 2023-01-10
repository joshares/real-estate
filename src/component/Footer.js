import React from "react";
import footerImg from '../images/footer-img.png'
import headerIcon from '../images/header-svg.svg'
import { useUserContext } from "../context/user_context";

const Footer = () => {
 const {loginWithRedirect} = useUserContext();

 return(
  <main className="footer-main">
   <section className="footer-up flex">
    <img alt="img" className="footer-img" src={footerImg} />
    <div className="reg-footer">
     <h2>Register and get discount as a new member
     </h2>
     <button onClick={loginWithRedirect} className="btn blue-btn">Register now
     </button>
    </div>
   </section>
   <section className="footer-down">
    <div>
     <div className="nav-icons footer-icons">
     <img src={headerIcon} alt='icon' className="nav-icon"/>
     <h3>HOMA</h3>
    </div>
     <p>lagos,Nigeria.</p>
     <p>call us: +234-806-812-6344</p>
    </div>
    <div>
     <h5>Support</h5>
     <p>features</p>
     <p>About us</p>
     <p>Products</p>
     <p>contact us</p>
    </div>
    <div>
     <h5>Our company</h5>
     <p>Terms of Service</p>
     <p>Privacy Policy</p>
     <p>Support Call</p>
     <p>FAQ</p>
    </div>
    <div>
     <h5>Social media</h5>
     <p>Instagram</p>
     <p>Twitter</p>
     <p>LinkedIn</p>
    </div>
   </section>
  </main>
 )
}

export default Footer