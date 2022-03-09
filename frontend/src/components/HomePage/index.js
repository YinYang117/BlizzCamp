import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import HomePageIntro from './HomePageIntro.js'
import SearchLoggedOut from './SearchLoggedOut'
import SpotCard from './SpotCard'
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [username, setUsername] = useState('');
  // TODO setup spots dispatch stuff
  const [firstTenSpots, setFirstTenSpots] = useState([]);

  // useEffect(() => {
  //   dispatch( ).then(() => firstTenSpots);
  //   //store action to get spots
  // }, [dispatch]);

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
        {firstTenSpots.forEach(spot => 
        <SpotCard spot={spot} />
        )}
      </div>
    </div>
  );
}

export default HomePage;