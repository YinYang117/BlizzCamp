import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spots/loadSpots';

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
  // state.spots { spotsArr: [
  //  {spotId: { spot obj }}
  //  {spotId: { spot obj }}
  // ]}
  dispatch(setSpots(data.spots))
  return data
}

// end of actions
/////////////////////////////////////////
// reducer

const initialState = { spotsArr: null };

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // cases
    case LOAD_SPOTS:
      newState = Object.assign({}, state);
      newState.spotsArr = action.payload;
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;