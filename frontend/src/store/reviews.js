import { useDispatch } from 'react-redux';
import { csrfFetch } from './csrf';

const LOAD_REVIEW = 'reviews/loadReview'
const LOAD_ALL_REVIEWS = 'reviews/loadReviews';
const LOAD_SPOT_REVIEWS = 'reviews/loadSpotReviews';

// link actions to cases
/////////////////////////////////////////
// action creators

const setSpotReviews = (reviews) => {
  return {
    type:LOAD_SPOT_REVIEWS,
    payload: reviews,
  }
}

const setAllReviews = (reviews) => {
  return {
    type: LOAD_ALL_REVIEWS,
    payload: reviews,
  }
}

const setReview = (review) => {
  return {
    type:LOAD_REVIEW,
    payload: review,
  }
} 

const updateReviews = () => {
  return {
    type:LOAD_SPOT_REVIEWS,
  }
}

// end of action creators
/////////////////////////////////////////
// thunks

export const deleteReview = (id) => async (dispatch) => {
  console.log('id from reviews store',id)
  await csrfFetch(`/api/reviews/${id}`, { method: 'DELETE'})
  dispatch(updateReviews());
}

export const loadSpotReviews = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/spot/${id}`)
  const data = await res.json();
  const spotReviews = {};
  
  data.forEach(review => spotReviews[review.id] = review);
  dispatch(setSpotReviews(spotReviews))
}

export const loadReviews = () => async (dispatch) => {
  dispatch(setAllReviews());
  return null
}

export const loadReview = (id) => async (dispatch) => {
  dispatch(setReview())
   return null
}

export const newReview = (newReview) => async (dispatch) => {
  const { userId, spotId, title, rating, description } = newReview
  console.log('from newReview in store', userId, spotId, title, rating, description)
  const res = await csrfFetch('/api/reviews/new', {
    method: 'POST',
    body: JSON.stringify({userId, spotId, title, rating, description}),
  })
  const data = await res.json();

  dispatch(setReview(data))
}

// end of thunks
/////////////////////////////////////////
// reducer

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    // cases
    case LOAD_ALL_REVIEWS:
      newState = action.payload
      return newState;
    case LOAD_SPOT_REVIEWS:
      newState = action.payload
      return newState;
    case LOAD_REVIEW:
      newState[action.payload.id] = action.payload
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;