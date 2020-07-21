import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {getCurrentCity} from "../cities/selector.js";

const getOffers = (state) => (state[NameSpace.OFFERS].offers);

export const getCurrentOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      const result = offers.filter((offer) => (offer.city.name === city));

      return result;
    }
);

