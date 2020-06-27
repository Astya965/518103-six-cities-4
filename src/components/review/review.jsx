import React from "react";
import PropTypes from "prop-types";

import {reviewShape} from "../../utils/prop-types.js";
import {getRatingPercentage} from "../../utils/utils.js";
import {formatReverseDate, formatMonthDay} from "../../utils/date.js";

const Review = (props) => {
  const {review} = props;
  const {comment, date, rating, user} = review;
  const {avatarUrl, name} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={formatReverseDate(date)}>{formatMonthDay(date)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape(reviewShape).isRequired
};

export default Review;
