import React, { useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const loginDemoUser = () => {
    const demoUser = { "credential": 'demo-user', "password": 'password1!' }
    dispatch(sessionActions.login(demoUser))
  }

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
        <button onClick={loginDemoUser}>Signin as Demo User</button>
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