import {getRatingPercentage} from "./utils.js";
import {memoize} from "./utils.js";

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
  percentage: `60%`
};

const testRatingFraction = {
  value: 1.1,
  percentage: `20%`
};

const testMemoize = memoize((arr) => arr.map((item) => item));
const testArr1 = [1, 2, 3];
const testArr2 = [4, 5, 6];

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

  it(`Rating for 1.1`, () => {
    expect(getRatingPercentage(testRatingFraction.value)).toBe(testRatingFraction.percentage);
  });

});

describe((`memoize tests`), () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`Same arrays are equel`, () => {
    expect(testMemoize(testArr1)).toBe(testMemoize(testArr1));
  });

  it(`Different arrays are not equel`, () => {
    expect(testMemoize(testArr1)).not.toBe(testMemoize(testArr2));
  });
});
