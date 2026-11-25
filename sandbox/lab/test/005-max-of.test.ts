import { describe, expect, it } from "vitest";
import { maxOf } from "../src/tasks/005-max-of";

describe("maxOf", () => {
  it("finds the largest number", () => {
    expect(maxOf([1, 9, 3])).toBe(9);
  });

  it("returns undefined for an empty array", () => {
    expect(maxOf([])).toBeUndefined();
  });

  it("handles a single number and negative numbers", () => {
    expect(maxOf([7])).toBe(7);
    expect(maxOf([-5, -1, -3])).toBe(-1);
  });
});
