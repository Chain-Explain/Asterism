import { describe, expect, it } from "vitest";
import { roundTo } from "../src/tasks/068-round-to";

describe("roundTo", () => {
  it("rounds to the documented decimal places", () => {
    expect(roundTo(3.14159, 2)).toEqual(3.14);
    expect(roundTo(2.5, 0)).toEqual(3);
  });

  it("handles floating-point boundary values", () => {
    expect(roundTo(1.005, 2)).toEqual(1.01);
    expect(roundTo(-1.005, 2)).toEqual(-1.01);
    expect(roundTo(-2.5, 0)).toEqual(-3);
  });

  it("keeps zeroes and extra decimal places", () => {
    expect(roundTo(2, 3)).toEqual(2);
    expect(roundTo(0.0004, 2)).toEqual(0);
  });

  it("rejects invalid arguments", () => {
    expect(() => roundTo(Number.NaN, 2)).toThrow(RangeError);
    expect(() => roundTo(1, -1)).toThrow(RangeError);
    expect(() => roundTo(1, 1.5)).toThrow(RangeError);
  });
});
