import {extendObject, uniqBy} from "../utils/utils.js";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return setCurrentCity(state, action);

    case ActionType.LOAD_OFFERS:
      return loadOffers(state, action);

    case ActionType.SET_CITIES:
      return setCities(state, action);

    case ActionType.LOAD_REVIEWS:
      return loadReviews(state, action);

    case ActionType.SET_CURRENT_OFFER:
      return setCurrentOffer(state, action);

    case ActionType.LOAD_NEAR_OFFERS:
      return loadNearOffers(state, action);

    default: return state;
  }
};

const setCurrentCity = (state, action) => {
  const cityName = action.payload;

  const currentCity = state.cities.find((city) => city.name === cityName);
  const offersByCity = state.allOffers.filter((offer) => offer.city.name === cityName);

  if (currentCity !== null) {
    return extendObject(state, {currentCity, offersByCity});
  }

  return state;
};

const loadOffers = (state, action) => {
  const allOffers = action.payload;

  if (allOffers !== null) {
    return extendObject(state, {allOffers});
  }
  return state;
};

const setCities = (state, action) => {
  const offers = action.payload;
  const cities = uniqBy(offers.map((offer) => (
    {location: {
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
      zoom: offer.city.location.zoom
    },
    name: offer.city.name})
  ), `name`);

  const currentCity = cities[0];
  const offersByCity = state.allOffers.filter((offer) => offer.city.name === cities[0].name);

  if (offers !== null) {
    return extendObject(state, {cities, currentCity, offersByCity});
  }
  return state;
};

const loadReviews = (state, action) => {
  const reviews = action.payload;

  if (reviews !== null) {
    return extendObject(state, {reviews});
  }
  return state;
};

const setCurrentOffer = (state, action) => {
  const currentOffer = action.payload;

  if (currentOffer !== null) {
    return extendObject(state, {currentOffer});
  }
  return state;
};

const loadNearOffers = (state, action) => {
  const currentOfferID = action.payload.id;

  const nearOffers = state.allOffers.filter((offer) => {
    return currentOfferID !== offer.id;
  });

  if (nearOffers !== null) {
    return extendObject(state, {nearOffers});
  }
  return state;
};

export {reducer, ActionCreator};
