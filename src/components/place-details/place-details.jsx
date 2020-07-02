import React from "react";
import PropTypes from "prop-types";

import PlaceGallery from "../place-gallery/place-gallery.jsx";
import PlaceInfo from "../place-info/place-info.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import PlacesMap from "../places-map/places-map.jsx";
import NearPlaces from "../near-places/near-places.jsx";

import {offerShape} from "../../utils/prop-types.js";
import {ViewMode} from "../../utils/constants.js";
import {memoize} from "../../utils/utils.js";

const PlaceDetails = (props) => {
  const {offer, offers} = props;
  const filterOffers = memoize((id) => offers.filter((item) => item.id !== id));
  const nearOffers = filterOffers(offer.id);

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
        <PlacesMap offers={nearOffers} viewMode={ViewMode.PlaceDetails}/>
      </section>
      <NearPlaces />
    </main>
  );
};

PlaceDetails.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  offer: PropTypes.shape(offerShape).isRequired,
};

export default PlaceDetails;
