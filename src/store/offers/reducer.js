import {extendObject} from "../../utils/utils.js";
import {ActionType} from "./actions.js";

const initialState = {
  offers: [],
  currentOffer: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extendObject(state, {
        offers: action.payload,
      });

    case ActionType.SET_CURRENT_OFFER:
      return extendObject(state, {
        currentOffer: action.payload,
      });

    default: return state;
  }
};
