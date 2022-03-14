import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import * as spotActions from '../../store/spots'
import * as reviewActions from '../../store/reviews'
import './SpotDetailsPage.css';
import ReviewCard from "./ReviewCard";

function SpotDetailsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  let { spotId } = useParams();
  let id = parseInt(spotId);

  const spot = useSelector(state => state.spots[id]);
  const reviews = useSelector(state => state.reviews)

  const [world, setWorld] = useState(spot?.world);
  const [location, setLocation] = useState(spot?.location);
  const [mainImage, setMainImage] = useState(spot?.mainImage);
  const [mainImageAlt, setMainImageAlt] = useState(spot?.mainImageAlt)
  const [description, setDescription] = useState(spot?.description);
  const [price, setPrice] = useState(spot?.price);
  const [showEditForm, setShowEditForm] = useState(false)
  const [isOwner, setIsOwner] = useState(false);
  const [reviewObjs, setReviewObjs] = useState([]);

  useEffect(() => {
    dispatch(spotActions.loadSpot(id))
    dispatch(reviewActions.loadSpotReviews(id))
    //store action to get spots
  }, [dispatch]);

  useEffect(() => {
    setReviewObjs([])
    Object.values(reviews).forEach(val => {
      reviewObjs.push(val)
    })
    console.log("reviews obj", reviewObjs)
  },[reviews])

  useEffect(() => {
    setIsOwner(sessionUser?.id === spot?.userId)
    console.log('user is owner:', isOwner)
  }, [sessionUser, spot, isOwner])

  const redirectHome = () => {
    history.push('/')
  }

  const submitChanges = () => {
    const newSpotData = spot;
    if (world) newSpotData.world = world
    if (location) newSpotData.location = location
    if (mainImage) newSpotData.mainImage = mainImage
    if (mainImageAlt) newSpotData.mainImageAlt = mainImageAlt
    if (description) newSpotData.description = description
    if (price) newSpotData.price = price
    dispatch(spotActions.editSpot(newSpotData))
    dispatch(spotActions.loadSpot(id))
    setShowEditForm(!showEditForm)
  };

  const deleteSpotSubmit = () => {
    dispatch(spotActions.deleteSpot(id))
    // dispatch(spotActions.loadSpots()); // If i delete this, will it fix the flickering the Bill mentioned...
    redirectHome();
  }

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
        <div className='button-container'>
          {isOwner && <button id="spot-edit" onClick={e => setShowEditForm(!showEditForm)}>Edit</button>}
          {isOwner && <button onClick={deleteSpotSubmit} id="spot-delete">Delete</button>}
          <button onClick={redirectHome}>Back to Home Page</button>
        </div>
      </div>}
      {showEditForm && isOwner && <form onSubmit={e => {
        e.preventDefault();
        submitChanges();
      }}>
        <input onChange={e => setWorld(e.target.value)} type="text" name="spot-world" placeholder={spot?.world} id="spot-world-input" value={world} />
        <input onChange={e => setLocation(e.target.value)} type="text" name="spot-location" placeholder={spot?.location} id="spot-location-input" value={location} />
        <input onChange={e => setMainImage(e.target.value)} type="text" name="spot-mainImage" placeholder={spot?.mainImage} id="spot-mainImage-input" value={mainImage} />
        <input onChange={e => setMainImageAlt(e.target.value)} type="text" name="spot-mainImageAlt" placeholder={spot?.mainImageAlt} id="spot-mainImageAlt-input" value={mainImageAlt} />
        <input onChange={e => setDescription(e.target.value)} type="text" name="spot-description" placeholder={spot?.description} id="spot-description-input" value={description} />
        <input onChange={e => setPrice(e.target.value)} type="text" name="spot-price" placeholder={spot?.price} id="spot-price-input" value={price} />
        <button id="spot-edit-submit" type='submit' >Submit Edits</button>
      </form>}
      <div> test top </div>
      <div className='reviews-container'>
        {reviewObjs.map(review => {
          return <ReviewCard key={review.id} review={review} />
        })}
      </div>
      <div> test bottom</div>
    </>
  );
}

export default SpotDetailsPage;