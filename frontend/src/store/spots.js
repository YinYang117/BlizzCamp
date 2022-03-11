import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spots/loadSpots';
const LOAD_SPOT = 'spots/loadSpot';

// link actions to cases
/////////////////////////////////////////
// action creators

const setSpots = (spots) => {
  return {
    type: LOAD_SPOTS,
    payload: spots,
  };
};

const setSpot = (spot) => {
  return {
    type: LOAD_SPOT,
    payload: spot,
  };
};

// end of action creators
/////////////////////////////////////////
// thunks

export const loadSpots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spots')
  const data = await res.json();
  const newSpots = {};

  data.spots.forEach(spot => newSpots[spot.id] = spot);
  dispatch(setSpots(newSpots))
}

export const loadSpot = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}`)
  const data = await res.json();

  dispatch(setSpot(data))
}

// end of thunks
/////////////////////////////////////////
// reducer

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    // cases
    case LOAD_SPOTS:
      newState = action.payload
      return newState;
    case LOAD_SPOT:
      newState[action.payload.id] = action.payload
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;