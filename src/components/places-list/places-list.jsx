import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {ActionCreator} from "../../store/offers/actions.js";
import {offerShape} from "../../utils/prop-types.js";
import {ViewMode, VIEWMODES} from "../../utils/constants.js";

import PlaceCard from "../place-card/place-card.jsx";

export class PlacesList extends Component {
  constructor(props) {
    super(props);

    this.state = {value: null};
    this.onPlaceHeaderClick = this.onPlaceHeaderClick.bind(this);
  }

  onPlaceHeaderClick(offer) {
    const {setCurrentOffer} = this.props;
    setCurrentOffer(offer);
  }

  render() {
    const {offers, viewMode, onPlaceCardHover} = this.props;

    const isMainView = viewMode === ViewMode.Main;

    return (
      <div className={`places__list
        ${isMainView ? `cities__places-list tabs__content` : `near-places__list`}`}>

        {offers.map((offer) => {
          return <PlaceCard
            offer={offer}
            onPlaceHeaderClick={this.onPlaceHeaderClick}
            onPlaceCardHover = {isMainView ? onPlaceCardHover : () => {}}
            key={offer.id}
          />;
        })}

      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentOffer: ActionCreator.setCurrentOffer,
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  viewMode: PropTypes.oneOf(VIEWMODES).isRequired,
  setCurrentOffer: PropTypes.func.isRequired,
  onPlaceCardHover: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(PlacesList);
