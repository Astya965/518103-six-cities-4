import {extendObject} from "../../utils/utils.js";

const initialState = {
  offers: [],
};

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
}

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extendObject(state, {
        offers: action.payload,
      });

    default: return state;
  }
};
