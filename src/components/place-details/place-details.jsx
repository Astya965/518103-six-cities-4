import React from "react";
import PropTypes from "prop-types";

import PlaceGallery from "../place-gallery/place-gallery.jsx";
import PlaceInfo from "../place-info/place-info.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import PlacesMap from "../places-map/places-map.jsx";
import NearPlaces from "../near-places/near-places.jsx";

import {offerShape} from "../../utils/prop-types.js";

const PlaceDetails = (props) => {
  const {offer} = props;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PlaceGallery images={offer.images} />
        <div className="property__container container">
          <div className="property__wrapper">
            <PlaceInfo offer={offer}/>
            <ReviewsList />
          </div>
        </div>
        <PlacesMap />
      </section>
      <NearPlaces />
    </main>
  );
};

PlaceDetails.propTypes = {
  offer: PropTypes.shape(offerShape).isRequired,
};

export default PlaceDetails;
