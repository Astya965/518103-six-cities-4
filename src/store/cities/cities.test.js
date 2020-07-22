import {ActionCreator, ActionType} from "./actions.js";
import {reducer} from "./reducer.js";

import {CITIES, SortType} from "../../utils/constants.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      cities: CITIES,
      currentCity: CITIES[0],
      currentSort: SortType.DEFAULT,
    });
  });

  it(`Reducer should set current city by a given value`, () => {
    expect(reducer({
      cities: CITIES,
      currentCity: CITIES[0],
      currentSort: SortType.DEFAULT,
    }, {
      type: ActionType.SET_CURRENT_CITY,
      payload: CITIES[1],
    })).toEqual({
      cities: CITIES,
      currentCity: CITIES[1],
      currentSort: SortType.DEFAULT,
    });
  });

  it(`Reducer should set current sort by a given value`, () => {
    expect(reducer({
      cities: CITIES,
      currentCity: CITIES[0],
      currentSort: SortType.DEFAULT,
    }, {
      type: ActionType.SET_CURRENT_SORT,
      payload: SortType.TOP_RATED,
    })).toEqual({
      cities: CITIES,
      currentCity: CITIES[0],
      currentSort: SortType.TOP_RATED,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setCurrentCity returns correct action`, () => {
    expect(ActionCreator.setCurrentCity(CITIES[1])).toEqual({
      type: ActionType.SET_CURRENT_CITY,
      payload: CITIES[1],
    });
  });

  it(`Action creator for setCurrentSort returns correct action`, () => {
    expect(ActionCreator.setCurrentSort(SortType.TOP_RATED)).toEqual({
      type: ActionType.SET_CURRENT_SORT,
      payload: SortType.TOP_RATED,
    });
  });
});
