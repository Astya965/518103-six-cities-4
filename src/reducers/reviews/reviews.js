import {extendObject} from "../../utils/utils.js";

const initialState = {
  reviews: []
};

export const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

export const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
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

