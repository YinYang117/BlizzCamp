import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'reviews/loadSpots';
const LOAD_SPOT_REVIEWS = 'reviews/loadSpot';

// link actions to cases
/////////////////////////////////////////
// action creators

loadSpotReviews

// end of action creators
/////////////////////////////////////////
// thunks




// end of thunks
/////////////////////////////////////////
// reducer

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    // cases
    case LOAD_REVIEWS:
      newState = action.payload
      return newState;
    case LOAD_SPOT_REVIEWS:
      newState[action.payload.id] = action.payload
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;