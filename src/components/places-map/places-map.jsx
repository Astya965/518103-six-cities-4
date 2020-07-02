import React, {Component, createRef} from "react";
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
    if (!this._mapRef || !this._mapRef.current) {
      return;
    }

    const {latitude, longitude, zoom} = this.props.offers[0].city.location;

    const mapSettings = {
      center: [latitude, longitude],
      zoom,
      zoomControl: false,
      marker: true
    };

    this._mapInstance = leaflet.map(this._mapRef.current, mapSettings);
    this._mapInstance.setView([latitude, longitude], zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._mapInstance);

    this._addMarkers(this.props.offers);
  }

  _addMarkers(offers) {
    if (this._mapInstance) {
      offers.forEach((offer) => {
        this._addMarker(offer.location.latitude, offer.location.longitude);
      });
    }
  }

  _addMarker(latitude, longitude) {
    const icon = this._markerTemplate;
    leaflet.marker([latitude, longitude], {icon}).addTo(this._mapInstance);
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
    const {viewMode} = this.props;
    const isNearViewMode = viewMode === ViewMode.PlaceDetails;

    return (
      <section className={`${isNearViewMode ? `property__map` : `cities__map`} map`}>
        <div id="map" style={{height: `100%`}} ref={this._mapRef}></div>
      </section>
    );
  }
}

PlacesMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  viewMode: PropTypes.oneOf(VIEWMODES).isRequired,
};
