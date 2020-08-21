import {ActionCreator, ActionType} from "./actions.js";
import {reducer} from "./reducer.js";

import {testOffer} from "../../mocks/test-mocks.js";
import {CITIES} from "../../utils/constants.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      cities: CITIES,
      currentCity: CITIES[0],
      currentOffer: null,
    });
  });

  it(`Reducer should set current city by a given value`, () => {
    expect(reducer({
      cities: CITIES,
      currentCity: CITIES[0],
      currentOffer: null,
    }, {
      type: ActionType.SET_CURRENT_CITY,
      payload: CITIES[1],
    })).toEqual({
      cities: CITIES,
      currentCity: CITIES[1],
      currentOffer: null,
    });
  });

  it(`Reducer should set current offer by a given value`, () => {
    expect(reducer({
      cities: CITIES,
      currentCity: CITIES[0],
      currentOffer: null,
    }, {
      type: ActionType.SET_CURRENT_OFFER,
      payload: testOffer,
    })).toEqual({
      cities: CITIES,
      currentCity: CITIES[0],
      currentOffer: testOffer,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loadOffers returns correct action`, () => {
    expect(ActionCreator.setCurrentCity(CITIES[1])).toEqual({
      type: ActionType.SET_CURRENT_CITY,
      payload: CITIES[1],
    });
  });

  it(`Action creator for loadOffers returns correct action`, () => {
    expect(ActionCreator.setCurrentOffer(testOffer)).toEqual({
      type: ActionType.SET_CURRENT_OFFER,
      payload: testOffer,
    });
  });
});
