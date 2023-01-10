import React from "react";

const Agents = ({full_name,slogan,web_url,phones,office,specializations,photo})=> {
 const handleClick = ()=> {
  window.open(web_url, '_blank')
 }
 const special = specializations.slice(0, 3)
 const name = office.name
 const phone = phones[0].number
 // const image = photo.href
 const img = photo.href
 const imgX = img.slice(0,-5)
 const adjustWidth = 'x_l.jpg'
 const image = `${imgX}${adjustWidth}`
  return (
  <main className="agent-main">
   <div className="agent-image">
    <img alt="img" className="agent-img" src={image}/>
   </div>
   <div className="agent-details">
    <h3 className=" blue">{full_name}</h3>
    <p><strong>OFFICE:</strong> {name}</p>
    <p className="flex gap-flex show"><span><strong>SPECIALIZATION:</strong></span> {special.map((item)=> {
     const {name } = item
     return (
      <p>{name}, </p>
     )
    })}</p>
    <p><strong>NUMBER:</strong> {phone}</p>
    <button onClick={handleClick} className="btn blue-btn">See more details</button>
   </div>
  </main>
 )
}

export default Agents