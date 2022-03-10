import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import * as spotActions from '../../store/spot'
import HomePageIntro from './HomePageIntro.js'
import SearchLoggedOut from './SearchLoggedOut'
import SpotCard from './SpotCard'
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const spots = useSelector(state => state.spots);

  // const [spots, setSpots] = useState(); // I can use this if I need the slice of state

  useEffect(() => {
    dispatch(spotActions.loadSpots());
    //store action to get spots
  }, [dispatch]);

  return (
    <div className='home-page'>
      {!sessionUser && <HomePageIntro />}
      {!sessionUser && <SearchLoggedOut />}
      {!sessionUser && <img
        src='https://www.nme.com/wp-content/uploads/2020/09/Xbox-Game-Pass.jpg'
        alt='home splash art before user login'
        className='splash-art'
      />}
      <div className='home-spots-container'>
        {spots.map(spot => 
          <SpotCard spot={spot} />
        )}
      </div>
    </div>
  );
}

export default HomePage;