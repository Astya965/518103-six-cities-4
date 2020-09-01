import {extendObject} from "../../utils/utils.js";
import {ActionType} from "./actions.js";
import {SortType} from "../../utils/constants.js";

const initialState = {
  offers: [],
  currentOffer: null,
  currentSort: SortType.DEFAULT,
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

      case ActionType.SET_CURRENT_SORT:
      return extendObject(state, {
        currentSort: action.payload,
      });

    default: return state;
  }
};
