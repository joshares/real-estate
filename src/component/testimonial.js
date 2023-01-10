import React from "react";
import celine from '../images/testimony-img.png'
import cece from '../images/celine-2.png'
import tayo from '../images/tayo.png'
import veline from '../images/veline.png'
import star from '../images/Star.svg'

const Testimonial = () => {
 return (
  <main className="test-main">
   <h2>Our Customers Testimonials</h2>
   <section className="test-boxes test_one">
    <article  className="test-box box_one img_slider">
     <img alt="img" src={celine}className="test-img"/>
     <div>
      <div className="flex test-flex">
       <div>
        <h5>Celine Adams</h5>
        <p className="join-test">Information Architecture</p>
       </div>
       <p className="star-test"><span><img alt="img" src={star} /></span>4.7</p>
      </div>
      <p>"By using this service, I feel very helpful in finding the style of my dream home at a friendly price but with a short time"</p>
     </div>
    </article>
    <article className="test-box box_two img_slider">
     <img alt="img" src={cece}className="test-img"/>
     <div>
      <div className="flex test-flex">
       <div>
        <h5>Cece Waters</h5>
        <p className="join-test">Information Architecture</p>
       </div>
       <p className="star-test"><span><img alt="img" src={star} /></span>4.6</p>
      </div>
      <p>"This platform helped me in finding strategic properties with a minimalist design, Good job."</p>
     </div>
    </article>
    <article className="img_slider_two test-box">
     <img alt="img" src={tayo}className="test-img"/>
     <div>
      <div className="flex test-flex">
       <div>
        <h5>Toyo Tayo</h5>
        <p className="join-test">Teacher</p>
       </div>
       <p className="star-test"><span><img alt="img" src={star} /></span>4.8</p>
      </div>
      <p>"Properly makes it easy for me to find a strategic house , the buying process is vey easy and properly helps the process untill the house can be occupied"</p>
     </div>
    </article>
    <article className="img_slider_two test-box">
     <img alt="img" src={veline}className="test-img"/>
     <div>
      <div className="flex test-flex">
       <div>
        <h5>Veline Cent</h5>
        <p className="join-test">UI/UX Designer</p>
       </div>
       <p className="star-test"><span><img alt="img" src={star} /></span>4.9</p>
      </div>
      <p>"It is an excellent platform for finding house. I easily found my dream house in a strategic place."</p>
     </div>
    </article>
   </section>
  </main>
 )
}

export default Testimonial
