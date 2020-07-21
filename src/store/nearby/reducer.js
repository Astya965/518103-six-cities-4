import {extendObject} from "../../utils/utils.js";
import {ActionType} from "./actions.js";

const initialState = {
  nearby: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEARBY_OFFERS:
      return extendObject(state, {
        nearby: action.payload,
      });

    default: return state;
  }
};

