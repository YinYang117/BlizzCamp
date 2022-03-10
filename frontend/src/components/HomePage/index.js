import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import * as spotActions from '../../store/spots'
import HomePageIntro from './HomePageIntro.js'
import SearchLoggedOut from './SearchLoggedOut'
import SpotCard from './SpotCard'
import './HomePage.css';

function HomePage({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const spotsArr = useSelector(state => state.spots);

  useEffect(() => {
    console.log('spot actions homepage index', spotActions)
    dispatch(spotActions.loadSpots())

    //store action to get spots
  }, [dispatch]);

  return (
    <>

      {spotsArr && <div className='home-page'>
        {!sessionUser && <HomePageIntro />}
        {!sessionUser && <SearchLoggedOut />}
        {!sessionUser && <img
          src='https://www.nme.com/wp-content/uploads/2020/09/Xbox-Game-Pass.jpg'
          alt='home splash art before user login'
          className='splash-art'
        />}
          <div className='home-spots-container'>
            {spotsArr.map(spot =>
              <SpotCard key={spot.id} spot={spot} />
            )}
          </div>
          <div>
            {`${spotsArr}`}
          </div>
      </div>}
    </>
  );
}

export default HomePage;