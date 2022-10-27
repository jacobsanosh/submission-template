import React from "react";
import './Discussion.css'
function DiscCard({ image, link, opinion,user_foreign}) {
    
  return (
    <div data-aos="zoom-in" data-aos-delay="150" className="contactCard">
      <div className="contact_img">
        <img src={image} alt="contactimg" />
      </div>
      <h2>{link}</h2>
      <h3>{opinion}</h3>
      <h3>Achyuth Mohan</h3>
    </div>
  );
}

export default DiscCard;