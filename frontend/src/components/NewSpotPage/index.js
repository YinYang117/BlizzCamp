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
  const [errors, setErrors] = useState([]);

  const redirectHome = () => history.push('/')
  // if user stops existing in state.session => Go home
  if (!sessionUser) redirectHome();

  useEffect(() => {
    //store action to get spots
  }, [dispatch]);

  const submitSpot = () => {
    const userId = parseInt(sessionUser.id)
    const newSpotData = { userId, world, location, mainImage, mainImageAlt, description, price };
    console.log('id from new spot', userId)
    dispatch(spotActions.newSpot(newSpotData))
    .catch(async (res) => {
      const data = await res.json();
      if (data && (data.errors)) setErrors(data.errors);
      //.errors here is an array of validation error.msg's
    });
    redirectHome();
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
        <input onChange={e => setWorld(e.target.value)} type="text" placeholder='world' value={world} required />
        <input onChange={e => setLocation(e.target.value)} type="text" placeholder='location' value={location} required />
        <input onChange={e => setMainImage(e.target.value)} type="text" placeholder='mainImage url' value={mainImage} required />
        <input onChange={e => setMainImageAlt(e.target.value)} type="text" placeholder='mainImage alt desc' value={mainImageAlt} required />
        <input onChange={e => setDescription(e.target.value)} type="text" placeholder=' spot description' value={description} required />
        <input onChange={e => setPrice(e.target.value)} type="text" placeholder='price' value={price} required />
        <button id="spot-edit-submit" type='submit' >Submit New Spot</button>
      </form>
      {errors && (
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      )}
    </>
  );
}

export default NewSpotPage;