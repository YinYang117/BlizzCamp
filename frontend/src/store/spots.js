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

const updateSpotExistence = () => {
  return { type: LOAD_SPOTS }
}

// end of action creators
/////////////////////////////////////////
// thunks

export const deleteSpot = (id) => async (dispatch) => {
  await csrfFetch(`/api/spots/${id}`, { method: 'DELETE' })
  dispatch(updateSpotExistence());
}

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

export const editSpot = (editedSpot) => async (dispatch) => {
  const { world, location, mainImage, mainImageAlt, description, price } = editedSpot
  const res = await csrfFetch(`/api/spots/${editedSpot.id}`, {
      method: 'PUT',
      body: JSON.stringify({ world, location, mainImage, mainImageAlt, description, price }),
    })
  
  const data = await res.json();
  console.log('data from editspot in store', data)

  dispatch(setSpot(data))
}

export const newSpot = (newSpot) => async (dispatch) => {
  const { userId, world, location, mainImage, mainImageAlt, description, price } = newSpot
  const res = await csrfFetch('/api/spots/new', {
      method: 'POST',
      body: JSON.stringify({ userId, world, location, mainImage, mainImageAlt, description, price }),
    })
  
  const data = await res.json();
  console.log('data from newSpot in store', data)

  dispatch(setSpot(data))
}

// end of thunks
/////////////////////////////////////////
// reducer

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  let newState = { ...state };
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