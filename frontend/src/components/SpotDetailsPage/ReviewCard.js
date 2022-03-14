import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as reviewActions from '../../store/reviews'

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [showEditForm, setShowEditForm] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewRating, setReviewRating] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');

  useEffect(() => {
    setIsOwner(sessionUser?.id === review.userId)
    console.log('user is owner of review?:', isOwner)
  }, [sessionUser, review]) 

  const deleteSpotSubmit = () => {
    dispatch(reviewActions.deleteReview(review.id))
    dispatch(reviewActions.loadSpotReviews(review.spotId))
  }

  return (
    <div className="review-container">
      <div className="white-background">
        <div className='review-title'>{`${review.title}`}</div>
        <div className="review-rating">Rating: {review.rating}</div>
      </div>
      <div className="review-description">{review.description}</div>
      {isOwner && <button onClick={deleteSpotSubmit} className="review-delete">Delete</button>} 
    </div>
  );
}

export default ReviewCard;