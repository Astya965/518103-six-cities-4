import React, {Component} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import {VIEWMODES, ViewMode} from "../../utils/constants.js";
import {offerShape} from "../../utils/prop-types.js";

export default class PlacesMap extends Component {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._mapInstance = null;

    this._markerTemplate = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  _initMap() {
  }

  componentDidMount() {
    const {offers} = this.props;

    if (offers.length > 0) {
      this._initMap();
    }
  }

  componentWillUnmount() {
    this.destroy();

  }

  destroy() {
    this._mapInstance.remove();
    this._mapInstance = null;
  }

  render() {
    const {viewMode} = props;
    const isNearViewMode = viewMode === ViewMode.PlaceDetails;

    return (
      <section className={`${isNearViewMode ? `property__map` : `cities__map`} map`}>
        <div id="map" style={{height: `100%`}} ref={this._mapRef}></div>
      </section>
    );
  }
};

PlacesMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  viewMode: PropTypes.oneOf(VIEWMODES).isRequired,
}

export default PlacesMap;
