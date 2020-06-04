import React from "react";
import star from "../../imgs/red-star.svg";

function StarRating({ rating, reviews }) {
  return (
    <div className="prop-review">
      <img src={star} className="star-review" alt="red-star" /> {rating} (
      {reviews})
    </div>
  );
}

export default StarRating;
