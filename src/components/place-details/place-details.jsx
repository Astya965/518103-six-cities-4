import React from "react";
import PropTypes from "prop-types";

import PlaceGallery from "../place-gallery/place-gallery.jsx";
import PlaceInfo from "../place-info/place-info.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import PlacesMap from "../places-map/places-map.jsx";
import NearPlaces from "../near-places/near-places.jsx";

import {offerShape, reviewShape} from "../../utils/prop-types.js";
import {memoize} from "../../utils/utils.js";
import {MAX_NEARBY_OFFERS_COUNT, MAX_IMAGES_COUNT, MAX_REVIEWS_COUNT, ViewMode} from "../../utils/constants.js";

const PlaceDetails = (props) => {
  const {offer, offers, city, reviews} = props;
  const memorizedOffers = memoize((id) => offers.filter((item) => item.id !== id).slice(0, MAX_NEARBY_OFFERS_COUNT));
  const nearOffers = memorizedOffers(offer.id);
  const memorizedSlicedArray = memoize((array, max) => array.slice(0, max));
  const slicedImages = memorizedSlicedArray(offer.images, MAX_IMAGES_COUNT);
  const slicedReviews = memorizedSlicedArray(reviews, MAX_REVIEWS_COUNT);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PlaceGallery images={slicedImages} />
        <div className="property__container container">
          <div className="property__wrapper">
            <PlaceInfo offer={offer}/>
            <ReviewsList reviews={slicedReviews}/>
          </div>
        </div>
        <PlacesMap offers={nearOffers} activeOffer={offer} city={offers[0].city} viewMode={ViewMode.PlaceDetails}/>
      </section>
      <NearPlaces offers={nearOffers} viewMode={ViewMode.PlaceDetails}/>
    </main>
  );
};

PlaceDetails.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  offer: PropTypes.shape(offerShape).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)).isRequired,
};

export default PlaceDetails;
