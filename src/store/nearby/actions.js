export const ActionType = {
  LOAD_NEARBY_OFFERS: `LOAD_NEAR_OFFERS`,
};

export const ActionCreator = {
  loadNearOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
};
