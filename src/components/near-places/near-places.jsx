import React from "react";
import PropTypes from "prop-types";

import {VIEWMODES} from "../../utils/constants.js";
import {offerShape} from "../../utils/prop-types.js";

import PlacesList from "../places-list/places-list.jsx";

const NearPlaces = (props) => {
  const {offers, viewMode} = props;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <PlacesList offers={offers}
          viewMode={viewMode} />
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  viewMode: PropTypes.oneOf(VIEWMODES).isRequired,
};

export default NearPlaces;
