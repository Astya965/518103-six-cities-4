import React from "react";
import PropTypes from "prop-types";

import PlacesSort from "../places-sort/places-sort.jsx";
import PlacesMap from "../places-map/places-map.jsx";
import PlacesList from "../places-list/places-list.jsx";

import withStatus from "../../hocks/with-status/with-status.jsx";

import {offerShape} from "../../utils/prop-types.js";
import {CITIES, ViewMode} from "../../utils/constants.js";

const PlacesSortWrapped = withStatus(PlacesSort);

const PlacesContainer = (props) => {
  const {offers, city} = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city}</b>
          <PlacesSortWrapped />
          <PlacesList offers={offers}
            viewMode={ViewMode.Main} />
        </section>
        <div className="cities__right-section">
          <PlacesMap offers={offers} viewMode={ViewMode.Main} city={offers[0].city}/>
        </div>
      </div>
    </div>
  );
};

PlacesContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  city: PropTypes.oneOf(CITIES).isRequired,
};

export default PlacesContainer;

