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

    this._markers = new Map();
  }

  _initMap() {
    if (!this._mapRef || !this._mapRef.current) {
      return;
    }

    const {latitude, longitude, zoom} = this.props.city.location;

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

    this._addMarkers();
  }

  _addMarkers(offers = this.props.offers) {
    const {activeOffer} = this.props;

    if (this._mapInstance) {
      offers.forEach((offer) => {
        this._addMarker(offer.location.latitude, offer.location.longitude, false, offer.id);
      });

      if (activeOffer !== null) {
        this._addMarker(activeOffer.location.latitude, activeOffer.location.longitude, true, activeOffer.id);
      }
    }
  }

  _addMarker(latitude, longitude, isActive, id) {
    const icon = this._getMarkerTemplate(isActive);
    const marker = leaflet.marker([latitude, longitude], {icon}).addTo(this._mapInstance);
    this._markers.set(id, marker);
  }

  _getMarkerTemplate(isActive) {
    return leaflet.icon({
      iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  _clearMarkers(keys) {
    if (this._mapInstance !== null) {
      keys.forEach((key) => {
        this._mapInstance.removeLayer(this._markers.get(key));
        this._markers.delete(key);
      });
    }
  }

  _compareMarkers(newData) {
    const newOffersSet = new Set();
    const newOffers = [];
    const outdatedOffers = [];

    newData.forEach((offer) => {
      newOffersSet.add(offer.id);
      if (!this._markers.has(offer.id)) {
        newOffers.push(offer);
      }
    });

    for (let key of this._markers.keys()) {
      if (!newOffersSet.has(key)) {
        outdatedOffers.push(key);
      }
    }

    return {
      newOffers,
      outdatedOffers
    };
  }

  componentDidMount() {
    const {offers} = this.props;

    if (offers.length > 0) {
      this._initMap();
    }
  }

  componentDidUpdate(prevProps) {
    const {activeOffer: prevActiveOffer, city: prevCity} = prevProps;
    const {activeOffer, offers, city} = this.props;

    if (prevCity.name !== city.name && this._mapInstance) {
      this.destroy();
      this._initMap();
    }

    if (activeOffer) {
      if (prevActiveOffer.id !== activeOffer.id) {
        const {newOffers, outdatedOffers} = this._compareMarkers(offers);
        outdatedOffers.push(prevActiveOffer.id);
        this._clearMarkers(outdatedOffers);
        newOffers.push(prevActiveOffer);
        this._addMarkers(newOffers);
      }
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

PlacesMap.defaultProps = {
  activeOffer: null
};

PlacesMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  viewMode: PropTypes.oneOf(VIEWMODES).isRequired,
  activeOffer: PropTypes.shape(offerShape),
};
