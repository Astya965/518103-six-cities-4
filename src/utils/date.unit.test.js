import {formatReverseDate, formatMonthDay} from "./date.js";

const testDate = {
  unix: 1593807294000,
  revrse: `2020-07-03`,
  monthDay: `July 03, 2020`,
};

describe((`date formatting tests`), () => {

  it(`formatReverseDate test`, () => {
    expect(formatReverseDate(testDate.unix)).toBe(testDate.revrse);
  });

  it(`formatMonthDay test`, () => {
    expect(formatMonthDay(testDate.unix)).toBe(testDate.monthDay);
  });
});
