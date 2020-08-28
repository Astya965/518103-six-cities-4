import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {getCurrentCity} from "../cities/selectors.js";

export const getCurrentOffer = (state) => (state[NameSpace.OFFERS].currentOffer);
const getOffers = (state) => (state[NameSpace.OFFERS].offers);

export const getCurrentOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      return offers.filter((offer) => (offer.city.name === city));
    }
);

