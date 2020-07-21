import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import PlaceGallery from "../place-gallery/place-gallery.jsx";
import PlaceInfo from "../place-info/place-info.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import PlacesMap from "../places-map/places-map.jsx";
import NearPlaces from "../near-places/near-places.jsx";

import {getNearby} from "../../store/nearby/selectors.js";
import {getReviews} from "../../store/reviews/selector.js";

import {offerShape, reviewShape} from "../../utils/prop-types.js";
import {memoize} from "../../utils/utils.js";
import {MAX_IMAGES_COUNT, MAX_REVIEWS_COUNT, ViewMode} from "../../utils/constants.js";

const memorizedSlicedArray = memoize((array, max) => array.slice(0, max));

const PlaceDetails = (props) => {
  const {offer, reviews, nearby} = props;

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
        <PlacesMap offers={nearby} activeOffer={offer} city={offer.city} viewMode={ViewMode.PlaceDetails}/>
      </section>
      <NearPlaces offers={nearby} viewMode={ViewMode.PlaceDetails}/>
    </main>
  );
};

const mapStateToProps = (state) => ({
  nearby: getNearby(state),
  reviews: getReviews(state),
});

PlaceDetails.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  offer: PropTypes.shape(offerShape).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)).isRequired,
  nearby: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
};

export {PlaceDetails};
export default connect(mapStateToProps)(PlaceDetails);
