import React, {Component} from "react";
import PropTypes from "prop-types";

import {VIEWMODES, ViewMode} from "../../utils/constants.js";
import {offerShape} from "../../utils/prop-types.js";

export default class PlacesMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {viewMode} = props;
    const isNearViewMode = viewMode === ViewMode.PlaceDetails;

    return (
      <section className={`${isNearViewMode ? `property__map` : `cities__map`} map`}>
        <div id="map"></div>
      </section>
    );
  }
};

PlacesMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  viewMode: PropTypes.oneOf(VIEWMODES).isRequired,
}

export default PlacesMap;
