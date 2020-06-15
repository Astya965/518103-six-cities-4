import React from "react";
import PropTypes from "prop-types";

import {offerShape} from "../../utils/prop-types.js";
import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = (props) => {
  const {offers, placeHeaderClickHandler} = props;

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer) => {
        return <PlaceCard
          offer={offer}
          onPlaceHeaderClick={placeHeaderClickHandler}
          key={offer.id}
        />;
      })}

    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  placeHeaderClickHandler: PropTypes.func.isRequired,
};

export default PlacesList;
