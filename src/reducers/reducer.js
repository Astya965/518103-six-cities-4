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
