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
  const [mainImage, setMainImage] = useState(spot?.mainImage);
  const [mainImageAlt, setMainImageAlt] = useState(spot?.mainImageAlt)
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

  const submitChanges = () => {
    const newSpotData = spot
    if (world) newSpotData.world = world
    if (location) newSpotData.location = location
    if (mainImage) newSpotData.mainImage = mainImage
    if (mainImageAlt) newSpotData.mainImageAlt = mainImageAlt
    if (description) newSpotData.description = description
    if (price) newSpotData.price = price
    dispatch(spotActions.editSpot(newSpotData))
  };

  // TODO what does Name='' do in my inputs? == to className
  return (
    <>
      {spot && <div className="spot-details-page">
        <img
          className="spot-card-image"
          src={spot.mainImage}
          alt={spot.mainImageAlt}
        />
        <div className='spot-card-title-container'>
          <div className='spot-card-title-container'>
            <h3 className='spot-world'>{spot?.world}</h3>
            <h4 className='spot-location'>{spot?.location}</h4>
          </div>
          <div className='spot-price'>Price: {spot?.price}</div>
        </div>
        <div className="spot-description" placeholder="description" id="spot-description-div" >{spot?.description}</div>
        <button id="spot-edit" onClick={e => setShowEditForm(true)}>Edit</button>
        <form onSubmit={e => {
            e.preventDefault();
            submitChanges();
          }}>
            <input onChange={e => setWorld(e.target.value)} type="text" name="spot-world" placeholder={spot?.world} id="spot-world-input" value={world} />
            <input onChange={e => setLocation(e.target.value)} type="text" name="spot-location" placeholder="location" id="spot-location-input" value={spot?.location} />
            <input onChange={e => setMainImage(e.target.value)} type="text" name="spot-mainImage" placeholder="mainImage" id="spot-mainImage-input" value={spot?.mainImage} />
            <input onChange={e => setMainImageAlt(e.target.value)} type="text" name="spot-mainImageAlt" placeholder="mainImageAlt" id="spot-mainImageAlt-input" value={spot?.mainImageAlt} />
            <input onChange={e => setDescription(e.target.value)} type="text" name="spot-description" placeholder="description" id="spot-description-input" value={spot?.description} />
            <input onChange={e => setPrice(e.target.value)} type="text" name="spot-price" placeholder="price" id="spot-price-input" value={spot?.price} />
            <button id="spot-edit-submit" type='submit' >Submit Edits</button>
          </form>
        <button id="spot-delete" >Delete</button>
        <button onClick={redirectHome}>Back to Home Page</button>
      </div>}
    </>
  );
}

export default SpotDetailsPage;