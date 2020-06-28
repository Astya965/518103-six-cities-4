import React from "react";
import PropTypes from "prop-types";

import {offerShape} from "../../utils/prop-types.js";
import {getRatingPercentage} from "../../utils/utils.js";

const PlaceCard = (props) => {
  const {offer, isMainView, onPlaceHeaderClick, handleCardPointerEnter, handleCardPointerLeave} = props;
  const {isPremium, isFavourite, previewImage, price, rating, type, title} = offer;
  const favouriteClass = isFavourite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className={`${isMainView ? `cities__place-card` : `near-places__card`} place-card`}
      onPointerEnter={() => {
        handleCardPointerEnter(offer);
      }}
      onPointerLeave={() => {
        handleCardPointerLeave();
      }}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}

      <div className={`${isMainView ? `cities__image-wrapper` : `near-places__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${favouriteClass}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={() => {
            onPlaceHeaderClick(offer);
          }}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape(offerShape).isRequired,
  isMainView: PropTypes.bool.isRequired,
  onPlaceHeaderClick: PropTypes.func.isRequired,
  handleCardPointerEnter: PropTypes.func.isRequired,
  handleCardPointerLeave: PropTypes.func.isRequired,
};

export default PlaceCard;

