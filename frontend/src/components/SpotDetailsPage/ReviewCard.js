import React from "react";

function ReviewCard({ review }) {
  return (
    <div className="review-container">
      <div className="white-background">
        <div className='review-title'>{`${review.title}`}</div>
        <div className="review-rating">{review.rating}</div>
      </div>
      <div className="review-description">{review.description}</div>
    </div>
  );
}

export default ReviewCard;