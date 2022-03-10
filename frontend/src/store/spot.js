import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spot/loadSpots';

// link actions to cases
/////////////////////////////////////////
// actions 

const setSpots = (spots) => {
  return {
    type: LOAD_SPOTS,
    payload: spots,
  };
};

export const loadSpots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spots')
  const data = await res.json();
  // data normalized should look like:
  // { spots: [
  //  {spotId: { spot obj }}
  //  {spotId: { spot obj }}
  // ]}
  console.log('!#!#data from spot store loading spots', data)

  dispatch(setSpots(data.spots))

  return data
}

// end of actions
/////////////////////////////////////////
// reducer

const initialState = { spots: null };

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // cases
    case LOAD_SPOTS:
      newState = Object.assign({}, state);
      newState.spots = action.payload;
      return newState;
    default:
      return state;
  }
};

export default spotReducer;