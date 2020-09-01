import {ActionCreator, ActionType} from "./actions.js";
import {reducer} from "./reducer.js";
import {testOffers, testOffer} from "../../mocks/test-mocks.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      currentOffer: null,
      currentSort: SortType.DEFAULT,
    });
  });

  it(`Reducer should load offers by a given value`, () => {
    expect(reducer({
      offers: [],
      currentOffer: null,
      currentSort: SortType.DEFAULT,
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: testOffers,
    })).toEqual({
      offers: testOffers,
      currentOffer: null,
      currentSort: SortType.DEFAULT,
    });
  });

  it(`Reducer should set current offer by a given value`, () => {
    expect(reducer({
      offers: [],
      currentOffer: null,
      currentSort: SortType.DEFAULT,
    }, {
      type: ActionType.SET_CURRENT_OFFER,
      payload: testOffer,
    })).toEqual({
      offers: [],
      currentOffer: testOffer,
      currentSort: SortType.DEFAULT,
    });
  });

  it(`Reducer should set current sort by a given value`, () => {
    expect(reducer({
      offers: [],
      currentOffer: null,
      currentSort: SortType.DEFAULT,
    }, {
      type: ActionType.SET_CURRENT_SORT,
      payload: SortType.TOP_RATED,
    })).toEqual({
      offers: [],
      currentOffer: null,
      currentSort: SortType.TOP_RATED,
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

  it(`Action creator for setCurrentSort returns correct action`, () => {
    expect(ActionCreator.setCurrentSort(SortType.TOP_RATED)).toEqual({
      type: ActionType.SET_CURRENT_SORT,
      payload: SortType.TOP_RATED,
    });
  });
});
