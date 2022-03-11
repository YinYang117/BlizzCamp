import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import * as spotActions from '../../store/spots'
import './NewSpotPage.css';

function NewSpotPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const [world, setWorld] = useState('');
  const [location, setLocation] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [mainImageAlt, setMainImageAlt] = useState('')
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    dispatch(spotActions.loadSpots())
    //store action to get spots
  }, [dispatch]);

  const redirectHome = () => {
    history.push('/')
  }

  const submitSpot = () => {
    const newSpotData = { world, location, mainImage, mainImageAlt, description, price };
    dispatch(spotActions.newSpot(newSpotData))
  };

  return (
    <>
      <div className="spot-details-page">
        <div className='button-container'>
          <button onClick={redirectHome}>Back to Home Page</button>
        </div>
      </div>
      <form onSubmit={e => {
        e.preventDefault();
        submitSpot();
      }}>
        <input onChange={e => setWorld(e.target.value)} type="text" placeholder='world' value={world} />
        <input onChange={e => setLocation(e.target.value)} type="text" placeholder='location' value={location} />
        <input onChange={e => setMainImage(e.target.value)} type="text" placeholder='mainImage url' value={mainImage} />
        <input onChange={e => setMainImageAlt(e.target.value)} type="text"placeholder='mainImage alt desc' value={mainImageAlt} />
        <input onChange={e => setDescription(e.target.value)} type="text" placeholder=' spot description' value={description} />
        <input onChange={e => setPrice(e.target.value)} type="text" placeholder='price' value={price} />
        <button id="spot-edit-submit" type='submit' >Submit Edits</button>
      </form>
    </>
  );
}

export default NewSpotPage;