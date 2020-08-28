import {formatReverseDate, formatMonthDay} from "./date.js";

describe((`date formatting tests`), () => {

  it(`formatReverseDate test`, () => {
    expect(formatReverseDate(1593807294000)).toBe(`2020-07-03`);
  });

  it(`formatMonthDay test`, () => {
    expect(formatMonthDay(1593807294000)).toBe(`July 03, 2020`);
  });
});
