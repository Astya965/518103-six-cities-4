const initialState = {
  currentCity: null,
  currentOffer: null,
  cities: [],
  offersByCity: [],
  allOffers: [],
  nearOffers: [],
  reviews: []
};

export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CITIES: `SET_CITIES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
};

const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city.name,
  }),

  setCurrentOffer: (offer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  setCities: (offers) => ({
    type: ActionType.SET_CITIES,
    payload: offers,
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),

  loadNearOffers: (offer) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offer,
  }),
};
