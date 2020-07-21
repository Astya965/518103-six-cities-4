import {extendObject} from "../../utils/utils.js";
import {CITIES} from "../../utils/constants.js";
import {ActionType} from "./actions.js";

const initialState = {
  cities: CITIES,
  currentCity: CITIES[0],
  currentOffer: null,
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

    default: return state;
  }
};
