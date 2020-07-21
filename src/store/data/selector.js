import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {SortType} from "../../utils/constants.js";

const getOffers = (state) => (state[NameSpace.DATA].offers);
const getCurrentCity = (state) => (state[NameSpace.CITIES].currentCity);
const getCurrentSort = (state) => (state[NameSpace.CITIES].currentSort);

export const getCurrentOffers = createSelector(
    getOffers,
    getCurrentCity,
    getCurrentSort,
    (offers, city, sort) => {
      const result = offers.filter((offer) => (offer.city.name === city));

      switch (sort) {
        case SortType.DEFAULT:
          return result;
        case SortType.TO_LOW:
          return (
            result.slice().sort((a, b) => (b.price - a.price))
          );
        case SortType.TO_HIGH:
          return (
            result.slice().sort((a, b) => (a.price - b.price))
          );
        case SortType.TOP_RATED:
          return (
            result.slice().sort((a, b) => (b.rating - a.rating))
          );
      }

      return result;
    }
);