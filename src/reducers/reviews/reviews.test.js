import {reducer, ActionCreator, ActionType} from "./reviews.js";
import {testReviews} from "../../mocks/test-mocks.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      reviews: [],
    });
  });

  it(`Reducer should load reviews by a given value`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: testReviews,
    })).toEqual({
      reviews: testReviews,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loadReviews returns correct action`, () => {
    expect(ActionCreator.loadReviews(testReviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: testReviews,
    });
  });
});
