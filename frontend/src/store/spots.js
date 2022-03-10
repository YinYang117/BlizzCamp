import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spots/loadSpots';

// link actions to cases
/////////////////////////////////////////
// actions 

const setSpots = (spotsArr) => {
  return {
    type: LOAD_SPOTS,
    payload: spotsArr,
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

  dispatch(setSpots(data.spotsArr))

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