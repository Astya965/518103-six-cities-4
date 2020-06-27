import React from "react";

import ReviewForm from "../review-form/review-form.jsx";
import Review from "../review/review.jsx";

const ReviewsList = () => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <Review />
      </ul>
      <ReviewForm />
    </section>
  );
};

export default ReviewsList;
