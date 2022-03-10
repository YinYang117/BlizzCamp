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

const loadSpots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spot')
  const data = await res.json();
  // data normalized should look like: { spotId: { spot obj },
  //                                     spotId2: {spot 2 obj}}
  console.log('!#!#data from spot store loading spots', data)
  console.log('!#!#res from spot store loading spots', res)

  dispatch(setSpots(data.spots))

  return res
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