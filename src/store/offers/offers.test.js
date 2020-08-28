import {ActionCreator, ActionType} from "./actions.js";
import {reducer} from "./reducer.js";
import {testOffers, testOffer} from "../../mocks/test-mocks.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      currentOffer: null,
    });
  });

  it(`Reducer should load offers by a given value`, () => {
    expect(reducer({
      offers: [],
      currentOffer: null,
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: testOffers,
    })).toEqual({
      offers: testOffers,
      currentOffer: null,
    });
  });

  it(`Reducer should set current offer by a given value`, () => {
    expect(reducer({
      offers: [],
      currentOffer: null,
    }, {
      type: ActionType.SET_CURRENT_OFFER,
      payload: testOffer,
    })).toEqual({
      offers: [],
      currentOffer: testOffer,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loadOffers returns correct action`, () => {
    expect(ActionCreator.loadOffers(testOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: testOffers,
    });
  });

  it(`Action creator for loadOffers returns correct action`, () => {
    expect(ActionCreator.setCurrentOffer(testOffer)).toEqual({
      type: ActionType.SET_CURRENT_OFFER,
      payload: testOffer,
    });
  });
});
