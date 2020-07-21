import {extendObject} from "../../utils/utils.js";
import {CITIES, SortType} from "../../utils/constants.js";

const initialState = {
  cities: CITIES,
  currentCity: CITIES[0],
  currentOffer: null,
  currentSort: SortType.DEFAULT,
};

export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
};

export const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city,
  }),

  setCurrentOffer: (offer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer
  }),

  setCurrentSort: (sort) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload: sort,
  }),

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return extendObject(state, {
        currentCity: action.payload,
      });

    case ActionType.SET_CURRENT_OFFER:
      return extendObject(state, {
        currentOffer: action.payload,
      });

    case ActionType.SET_CURRENT_SORT:
      return extendObject(state, {
        currentSort: action.payload,
      });

    default: return state;
  }
};
