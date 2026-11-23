import { describe, expect, it } from "vitest";
import { lcm } from "../src/tasks/013-lcm";

describe("lcm", () => {
  it("finds the least common multiple", () => {
    expect(lcm(4, 6)).toEqual(12);
    expect(lcm(3, 5)).toEqual(15);
  });

  it("returns the larger number when it is a multiple of the smaller", () => {
    expect(lcm(3, 9)).toEqual(9);
    expect(lcm(9, 3)).toEqual(9);
  });

  it("returns zero when either input is zero", () => {
    expect(lcm(0, 5)).toEqual(0);
    expect(lcm(5, 0)).toEqual(0);
  });

  it("handles identical inputs", () => {
    expect(lcm(7, 7)).toEqual(7);
  });
});
