import {extendObject} from "../../utils/utils.js";
import {ActionType} from "./actions.js";

const initialState = {
  offers: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extendObject(state, {
        offers: action.payload,
      });

    default: return state;
  }
};
