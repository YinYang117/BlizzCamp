import React from "react";

function SearchLoggedOut() {
  return (
    <>
      <div className='search-container-logged-in'>
        <div className='world-or-location-query'>
          <p>Where To?</p>
          <div id='where-query-area' className='white-background'>
            <i className="fa-solid fa-magnifying-glass-location"></i>
            <input id='query-input'> Where to input </input>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchLoggedOut;