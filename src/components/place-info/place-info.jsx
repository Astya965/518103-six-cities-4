import React from "react";
import PropTypes from "prop-types";

import HostInfo from "../host-info/host-info.jsx";

import {offerShape} from "../../utils/prop-types.js";
import {getRatingPercentage} from "../../utils/utils.js";

const PlaceInfo = (props) => {
  const {offer} = props;
  const {isPremium, isFavourite, price, rating, title, type,
    bedrooms, maxAdults, goods, description, host} = offer;

  const favouriteClass = isFavourite ? `property__bookmark-button--active` : ``;

  return (
    <React.Fragment>
      {isPremium ?
        <div className="property__mark">
          <span>Premium</span>
        </div> : ``}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className={`property__bookmark-button button ${favouriteClass}`} type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: getRatingPercentage(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((good, i) => {
            return (
              <li className="property__inside-item" key={`good-${i}`}>
                {good}
              </li>
            );
          })}
        </ul>
      </div>
      <HostInfo host={host} />
      <div className="property__description">
        {description.map((paragraph, i) => {
          return (
            <p className="property__text" key={`paragraph-${i}`}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </React.Fragment>
  );
};

PlaceInfo.propTypes = {
  offer: PropTypes.shape(offerShape).isRequired,
};

export default PlaceInfo;
