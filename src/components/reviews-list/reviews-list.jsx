import React from "react";
import PropTypes from "prop-types";

import {reviewShape} from "../../utils/prop-types.js";

import ReviewForm from "../review-form/review-form.jsx";
import Review from "../review/review.jsx";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews
          .map((review) => {
            return <Review key={review.id} review={review} />;
          })}
      </ul>
      <ReviewForm />
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)).isRequired,
};

export default ReviewsList;
