import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupFormPage.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([]);

  // once user exists in state.session. => Go home
  if (sessionUser) return <Redirect to='/' />;

  // form submit => sessAct.signup and err chk
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          // console.log('DATA FROM SIGNUP FORM PAGE:', data)
          // console.log('DATAERRORS:', data.errors)
          if (data && data.errors) setErrors(...data.errors);
          console.log('errors should be array here', errors)
        });
    }
    return setErrors(['Above all else, Confirm Password must match Password exactly']);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors && (
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error.msg}</li>)}
        </ul>
      )}
      <label className='username'>
        Username
        <input type='text' value={username} onChange={e => setUsername(e.target.value)} required />
      </label>
      <label className='email'>
        Email
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} required />
        {/* or type='email */}
      </label>
      <label>
        Password
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <label>
        Confirm Password
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </label>
      <button type='submit'>
        Sign Up
      </button>
    </form>
  );
}

export default SignupFormPage;