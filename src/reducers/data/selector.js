import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const getOffers = (state) => (state[NameSpace.DATA].offers);
const getActiveCity = (state) => (state[NameSpace.CITIES].currentCity);

export const getCurrentOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => {
      const result = offers.filter((offer) => (offer.city.name === city));

      return result;
    }
);
