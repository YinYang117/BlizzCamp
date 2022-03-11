import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { useHistory } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const createNewSpot = () => {
    history.push('/spots/new')
  }

  return (
    <>
      <div className='nav-container'>
          <NavLink className='home-link' exact to="/">BlizzCamp</NavLink>
          {isLoaded && sessionLinks}
      </div>
      <div>
        <button onClick={createNewSpot}>Create New Spot!</button>
      </div>
    </>
  );
}

export default Navigation;