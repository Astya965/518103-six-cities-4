import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const getOffers = (state) => (state[NameSpace.DATA].offers);
const getCity = (state) => (state[NameSpace.CITIES].currentCity);

export const getCurrentOffers = createSelector(
  getOffers,
  getCity,
  (offers, city) => {
    const result = offers.filter((it) => (it.city.name === city));

    return result;
  }
);
