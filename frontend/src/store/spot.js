import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const SET_USER = 'spot/setUser';
const REMOVE_USER = 'spot/removeUser';

// link actions to cases
/////////////////////////////////////////
// actions 

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = ( user ) => async (dispatch) => {
  const { credential, password } = user;

  // post through /api/spot to User.login func
  const res = await csrfFetch('/api/spot', {
    method: 'POST',
    body: JSON.stringify({ credential, password }),
  });

  // Dispatch with confidence, Error handling fully covered before this step
  const data = await res.json();
  dispatch(setUser(data.user));
  return res;
};

// get /api/spot => 
export const restoreUser = () => async dispatch => {
  const res = await csrfFetch('/api/spot') 
  const data = await res.json();
  // data is { user: { my safe user obj with id, username, email}}
  dispatch(setUser(data.user))
  return res
};

export const signup = ( newUser ) => async (dispatch) => {
  const { username, email, password } = newUser;

  // post through /api/users to User.signup func
  const res = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
  });

  // adds to the store through setUser action
  const data = await res.json();
  dispatch(setUser(data.user));
  return res;
}

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/spot', {
    method: 'DELETE',
  });
  // remove from store through removeUser action
  dispatch(removeUser());
  return response;
};

// end of actions
/////////////////////////////////////////
// reducer

const initialState = { user: null };

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // cases
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default spotReducer;