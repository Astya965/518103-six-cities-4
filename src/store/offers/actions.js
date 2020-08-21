export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  setCurrentOffer: (offer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer
  }),
};
