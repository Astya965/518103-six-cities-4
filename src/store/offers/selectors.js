import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {getCurrentCity} from "../cities/selectors.js";

const getOffers = (state) => (state[NameSpace.OFFERS].offers);

export const getCurrentOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      return offers.filter((offer) => (offer.city.name === city));
    }
);

