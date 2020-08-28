export const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

export const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
};
