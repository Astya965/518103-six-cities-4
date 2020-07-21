import {extendObject} from "../../utils/utils.js";
import {ActionType} from "./actions.js";

const initialState = {
  reviews: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extendObject(state, {
        reviews: action.payload,
      });

    default: return state;
  }
};

