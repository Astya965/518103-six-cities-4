import React from "react";
import PropTypes from "prop-types";

import {ViewMode, VIEWMODES} from "../../utils/constants.js";
import {offerShape} from "../../utils/prop-types.js";

import PlacesList from "../places-list/places-list.jsx";

const NearPlaces = (props) => {
  const {offers, placeHeaderClickHandler} = props;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <PlacesList offers={offers}
          viewMode={ViewMode.PlaceDetails}
          placeHeaderClickHandler={placeHeaderClickHandler} />
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  viewMode: PropTypes.oneOf(VIEWMODES).isRequired,
  placeHeaderClickHandler: PropTypes.func.isRequired,
};

export default NearPlaces;
