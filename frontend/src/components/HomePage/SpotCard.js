import React from "react";
import { useHistory } from "react-router-dom"

function SpotCard({ spot }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/spots/${spot.id}`)
  }

  return (
    <div className='spot-card-container'>
      <img
        className="spot-card-image"
        src={spot.mainImage}
        alt={spot.mainImageAlt}
        onClick={handleClick}
      />
      <div className='spot-card-title-icon-container'>
        <div className='spot-card-title-container'>
          <h3 className='spot-world'>{spot.world}</h3>
          <h4 className='spot-world'>{spot.location}</h4>
        <div className='spot-price'>Price: {spot.price}</div>
        <button onClick={handleClick}>Spot Details</button>
      </div>
      </div>
    </div>
  );
}

export default SpotCard;