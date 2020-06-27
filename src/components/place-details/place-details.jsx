import React from "react";
import PropTypes from "prop-types";

import PlaceGallery from "../place-gallery/place-gallery.jsx";
import PlaceInfo from "../place-info/place-info.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import PlacesMap from "../places-map/places-map.jsx";
import NearPlaces from "../near-places/near-places.jsx";

import {offerShape, reviewShape} from "../../utils/prop-types.js";
import {MAX_NEAR_OFFERS_COUNT, MAX_IMAGES_COUNT, ViewMode} from "../../utils/constants.js";
import {memoize} from "../../utils/utils.js";

const PlaceDetails = (props) => {
  const {offer, offers, reviews, placeHeaderClickHandler} = props;
  const memorizedOffers = memoize((id) => offers.filter((item) => item.id !== id).slice(0, MAX_NEAR_OFFERS_COUNT));
  const nearOffers = memorizedOffers(offer.id);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PlaceGallery images={offer.images.slice(0, MAX_IMAGES_COUNT)} />
        <div className="property__container container">
          <div className="property__wrapper">
            <PlaceInfo offer={offer}/>
            <ReviewsList reviews={reviews}/>
          </div>
        </div>
        <PlacesMap offers={nearOffers} activeOffer={offer} viewMode={ViewMode.PlaceDetails}/>
      </section>
      <NearPlaces offers={nearOffers} viewMode={ViewMode.PlaceDetails} placeHeaderClickHandler={placeHeaderClickHandler}/>
    </main>
  );
};

PlaceDetails.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  offer: PropTypes.shape(offerShape).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)).isRequired,
  placeHeaderClickHandler: PropTypes.func.isRequired,
};

export default PlaceDetails;
