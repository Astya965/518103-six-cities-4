import {extendObject} from "../../utils/utils.js";

const initialState = {
  nearby: [],
};

export const ActionType = {
  LOAD_NEARBY_OFFERS: `LOAD_NEAR_OFFERS`,
};

export const ActionCreator = {
  loadNearOffers: (offer) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offer,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEAR_OFFERS:
      return extendObject(state, {
        nearby: action.payload,
      });;

    default: return state;
  }
};

