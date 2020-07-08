import {getRatingPercentage} from "./utils.js";
import {memoize} from "./utils.js";
import {extendObject} from "./utils.js";

const testMemoize = memoize((arr) => arr.map((item) => item));
const testArr1 = [1, 2, 3];
const testArr2 = [4, 5, 6];

describe(`getRatingPercentage tests`, () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`Rating for 0`, () => {
    expect(getRatingPercentage(0)).toBe(`0%`);
  });

  it(`Rating for 5`, () => {
    expect(getRatingPercentage(5)).toBe(`100%`);
  });

  it(`Rating for 2.5`, () => {
    expect(getRatingPercentage(2.5)).toBe(`60%`);
  });

  it(`Rating for 1.1`, () => {
    expect(getRatingPercentage(1.1)).toBe(`20%`);
  });

});

describe((`memoize tests`), () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`Same arrays are equal`, () => {
    expect(testMemoize(testArr1)).toBe(testMemoize(testArr1));
  });

  it(`Different arrays are not equal`, () => {
    expect(testMemoize(testArr1)).not.toBe(testMemoize(testArr2));
  });
});

describe((`extendObject tests`), () => {

  it(`extendObject function should extend object`, () => {

    expect(extendObject({name: `Alice`}, {age: 42})).toEqual({
      name: `Alice`,
      age: 42
    });

  });

});
