import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import * as spotActions from '../../store/spots'
import './SpotDetailsPage.css';

function SpotDetailsPage({ spot }) {

  //to do: I need to have options for dispatching changes to the store and database
  //each time a user edits a spot, or deletes a spot
  //Then Ill implement checking the User id and rendering it differently if youre not the owner
  

  return (
    <>
      <form>
        <div className="spot-id">{spot.id}</div>
        <input type="text" name="spot-world" placeholder="world" id="spot-world-input" >{spot.world}</input>
        <input type="text" name="spot-location" placeholder="location" id="spot-location-input" >{spot.location}</input>
        <input type="text" name="spot-description" placeholder="description" id="spot-description-input" >{spot.description}</input>
        <input type="text" name="spot-price" placeholder="price" id="spot-price-input" >{spot.price}</input>
        <button id="spot-edit-submit" >Submit Edits</button>
      </form>
    </>
  );
}

export default SpotDetailsPage;