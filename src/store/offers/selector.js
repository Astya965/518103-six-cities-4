import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const getOffers = (state) => (state[NameSpace.OFFERS].offers);
const getCurrentCity = (state) => (state[NameSpace.CITIES].currentCity);

export const getCurrentOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      const result = offers.filter((offer) => (offer.city.name === city));

      return result;
    }
);
