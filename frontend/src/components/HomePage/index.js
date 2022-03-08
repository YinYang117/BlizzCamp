import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [username, setUsername] = useState('');


  // putting body into grid 
  return (
    <div className='home-page'>
      <h1 id='home-page-h1' >Find the ultimate getaway</h1>
      <h2>New locations across the galaxy</h2>
      <h2>Just waiting for you to travel there</h2>
    </div>
  );
  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  // return (
  //   <div className='nav-container'>
  //     <NavLink className='home-link' exact to="/">BlizzCamp</NavLink>
  //     {isLoaded && sessionLinks}
  //   </div>
  // );







    // example code 
    // <form onSubmit={handleSubmit}>
    //   {errors && (
    //     <ul>
    //       {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    //     </ul>
    //   )}
    //   <label className='username'>
    //     Username
    //     <input type='text' value={username} onChange={e => setUsername(e.target.value)} required />
    //   </label>
    //   <label className='email'>
    //     Email
    //     <input type='text' value={email} onChange={e => setEmail(e.target.value)} required />
    //     {/* or type='email */}
    //   </label>
    //   <label>
    //     Password
    //     <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
    //   </label>
    //   <label>
    //     Confirm Password
    //     <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
    //   </label>
    //   <button type='submit'>
    //     Sign Up
    //   </button>
    // </form>
  // );
}

export default HomePage;