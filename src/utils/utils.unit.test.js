import {getRatingPercentage} from "./utils.js";

const testRatingMin = {
  value: 0,
  percentage: `0%`
};

const testRatingMax = {
  value: 5,
  percentage: `100%`
};

const testRatingHalf = {
  value: 2.5,
  percentage: `50%`
};

describe(`getRatingPercentage tests`, () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`Rating for 0`, () => {
    expect(getRatingPercentage(testRatingMin.value)).toBe(testRatingMin.percentage);
  });

  it(`Rating for 5`, () => {
    expect(getRatingPercentage(testRatingMax.value)).toBe(testRatingMax.percentage);
  });

  it(`Rating for 2.5`, () => {
    expect(getRatingPercentage(testRatingHalf.value)).toBe(testRatingHalf.percentage);
  });

});