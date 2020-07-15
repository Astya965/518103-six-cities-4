import {reducer, ActionCreator, ActionType} from "./data.js";
import {testOffers} from "../../mocks/test-mocks.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
    });
  });

  it(`Reducer should load offers by a given value`, () => {
    expect(reducer({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: testOffers,
    })).toEqual({
      offers: testOffers,
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
});