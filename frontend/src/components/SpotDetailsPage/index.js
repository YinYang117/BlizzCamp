import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import * as spotActions from '../../store/spots'
import './SpotDetailsPage.css';

function SpotDetailsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  let { spotId } = useParams();
  let id = parseInt(spotId);
  const spot = useSelector(state => state.spots[id]);

  const [world, setWorld] = useState(spot?.world);
  const [location, setLocation] = useState(spot?.location);
  const [description, setDescription] = useState(spot?.description);
  const [price, setPrice] = useState(spot?.price);
  const [showEditForm, setShowEditForm] = useState(false)
  // setWorld(spot.world)

  useEffect(() => {
    dispatch(spotActions.loadSpot(id))
    //store action to get spots
  }, [dispatch]);

  const redirectHome = () => {
    history.push('/')
  }

  return (
    <>
      <div className="spot-details-page">
        <img
          className="spot-card-image"
          src={spot.mainImage}
          alt={spot.mainImageAlt}
        />
        <div className="spot-world" >{spot?.world}</div>
        <div className="spot-location" placeholder="location" id="spot-location-div" >{spot?.location}</div>
        <div className="spot-description" placeholder="description" id="spot-description-div" >{spot?.description}</div>
        <div className="spot-price" placeholder="price" id="spot-price-div" >{spot?.price}</div>
        <button id="spot-edit"
          onClick={e => setShowEditForm(true)}>Edit</button>
        <button id="spot-delete" >Delete</button>
        {showEditForm &&
          <form>
            <input onChange={e => setWorld(e.target.value)} type="text" name="spot-world" placeholder="world" id="spot-world-input" value={world} />
            <input onChange={e => setLocation(e.target.value)} type="text" name="spot-location" placeholder="location" id="spot-location-input" value={location} />
            <input onChange={e => setDescription(e.target.value)} type="text" name="spot-description" placeholder="description" id="spot-description-input" value={description} />
            <input onChange={e => setPrice(e.target.value)} type="text" name="spot-price" placeholder="price" id="spot-price-input" value={price} />
            <button id="spot-edit-submit" >Submit Edits</button>
          </form>}
        <button onClick={redirectHome}>Back to Home Page</button>
      </div>
    </>
  );
}

export default SpotDetailsPage;