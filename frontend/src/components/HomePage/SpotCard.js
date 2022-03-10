import React from "react";

function SpotCard({ spot }) {

  return (
    <div className='spot-card-container'>
      <img className="spot-card-image"
      src="https://www.w3schools.com/images/img_girl.jpg"
      alt="Diablo2" />
      <div className='spot-card-title-icon-container'>
        <div className='spot-card-title-container'>
          <h3 className='spot-world'>{spot.world}</h3>
          <h4 className='spot-world'>{spot.location}</h4>
        </div>
        <div className='spot-icons'>
          <i className="fa-solid fa-bed"/>
          <i className="fa-solid fa-spaghetti-monster-flying"></i>
        </div>
      </div>
    </div>
  );
}

export default SpotCard;