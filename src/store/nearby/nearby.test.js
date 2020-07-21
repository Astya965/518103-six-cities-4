import {ActionCreator, ActionType} from "./actions.js";
import {reducer} from "./reducer.js";
import {testOffers} from "../../mocks/test-mocks.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      nearby: [],
    });
  });

  it(`Reducer should load nearby offers by a given value`, () => {
    expect(reducer({
      nearby: [],
    }, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: testOffers,
    })).toEqual({
      nearby: testOffers,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loadNearOffers returns correct action`, () => {
    expect(ActionCreator.loadNearOffers(testOffers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: testOffers,
    });
  });
});
