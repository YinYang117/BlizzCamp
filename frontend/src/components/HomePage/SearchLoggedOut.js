import React from "react";

function SearchLoggedOut() {
  
  return (
    <>
      <div className='search-container-logged-in'>
        <div className='world-or-location-query'>
          <p>Where To?</p>
          <div className='white-background where-to'>
            <i className="fa-solid fa-magnifying-glass-location" />
            <input className="location-search-input" type="text" placeholder="World or Location..."></input>
          </div>
        </div>
        <div className='date-query'>
          <p>Dates</p>
          <div className='white-background search-dates'>
            <i class="fa-solid fa-calendar" />
            <input className='date-search-input' type="text" placeholder="World or Location..."></input>
          </div>
        </div>
        <div className='search-button-container'>
          <div className='circle-background'>
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchLoggedOut;