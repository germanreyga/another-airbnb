import React from "react";
import star from "../../imgs/star.svg";

function StarRating(props) {
  return (
    <div className="prop-review">
      <img src={star} className="star-review" alt="red-star" /> {props.rating} (
      {props.reviews})
    </div>
  );
}

export default StarRating;
