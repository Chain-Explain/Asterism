import { describe, expect, it } from "vitest";
import { minOf } from "../src/tasks/006-min-of";

describe("minOf", () => {
  it("finds the smallest number", () => {
    expect(minOf([4, 2, 8])).toEqual(2);
    expect(minOf([1, 2, 3])).toEqual(1);
    expect(minOf([3, 2, 1])).toEqual(1);
  });

  it("returns undefined for an empty array", () => {
    expect(minOf([])).toEqual(undefined);
  });

  it("handles a single element", () => {
    expect(minOf([7])).toEqual(7);
  });

  it("handles negative numbers", () => {
    expect(minOf([-1, -5, -3])).toEqual(-5);
    expect(minOf([-2, 0, 2])).toEqual(-2);
  });
});