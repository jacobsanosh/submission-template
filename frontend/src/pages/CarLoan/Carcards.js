import React from 'react'
import './Carloan.css'
function Carcards({ agent,carname,duration,intrestrate,phno }) {
  return (
    <div data-aos="zoom-in" data-aos-delay="150" className="contactCard">
      <div className="contact_img">
        <img src="" alt="contactimg" />
      </div>
      <h2>{agent}</h2>
      <h2>{carname}</h2>
      <h3>{duration}</h3>
      <h3>{intrestrate}</h3>
      <h3>{phno}</h3>
    </div>
  )
}

export default Carcards