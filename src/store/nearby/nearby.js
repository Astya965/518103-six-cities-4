import {extendObject} from "../../utils/utils.js";

const initialState = {
  nearby: [],
};

export const ActionType = {
  LOAD_NEARBY_OFFERS: `LOAD_NEAR_OFFERS`,
};

export const ActionCreator = {
  loadNearOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
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

