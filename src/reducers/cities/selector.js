import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {uniqBy} from "../../utils/utils.js";
import {MAX_CITIES} from "../../utils/constants.js";

const getOffers = (state) => (state[NameSpace.DATA].offers);

export const getCities = createSelector(
  getOffers,
  (offers) => {
    const cities = uniqBy(offers.map((offer) => (
      {location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom
      },
      name: offer.city.name})
    ), `name`);

    if (cities.length > MAX_CITIES) {
      return cities.slice(0, MAX_CITIES);
    }

    return cities;
  }
);

export const getActiveCity = (state) => createSelector(
  getCities,
  (cities) => {
    if (state[NameSpace.CITIES].currentCity === null) {
      return cities[0];
    }
    return state[NameSpace.CITIES].currentCity;
  }
);
export const getCurrentOffer = (state) => (state[NameSpace.CITIES].currentOffer);
