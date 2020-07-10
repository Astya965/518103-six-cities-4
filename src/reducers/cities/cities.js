import {extendObject} from "../../utils/utils.js";

const initialState = {
  currentOffer: null,
  currentCity: null,
};

export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
};

export const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city.name,
  }),

  setCurrentOffer: (offer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer
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

    default: return state;
  }
};
