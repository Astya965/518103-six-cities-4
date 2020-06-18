import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {offerShape} from "../../utils/prop-types.js";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {value: null};

    this._handleCardPointerEnter = this._handleCardPointerEnter.bind(this);
    this._handleCardPointerLeave = this._handleCardPointerLeave.bind(this);
  }

  _handleCardPointerEnter(offer) {
    this.setState({value: offer});
  }

  _handleCardPointerLeave() {
    this.setState({value: null});
  }

  render() {
    const {offers, placeHeaderClickHandler} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">

        {offers.map((offer) => {
          return <PlaceCard
            offer={offer}
            onPlaceHeaderClick={placeHeaderClickHandler}
            handleCardPointerEnter = {this._handleCardPointerEnter}
            handleCardPointerLeave = {this._handleCardPointerLeave}
            key={offer.id}
          />;
        })}

      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  placeHeaderClickHandler: PropTypes.func.isRequired,
};

export default PlacesList;
