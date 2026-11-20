import { describe, expect, it } from "vitest";
import { binarySearch } from "../src/tasks/089-binary-search";

describe("binarySearch", () => {
  it("finds a value in an ascending array", () => {
    expect(binarySearch([1, 3, 5, 7], 5)).toEqual(2);
  });

  it("returns -1 for a missing value or an empty array", () => {
    expect(binarySearch([1, 3, 5, 7], 4)).toEqual(-1);
    expect(binarySearch([], 1)).toEqual(-1);
  });

  it("finds the first and last elements", () => {
    expect(binarySearch([1, 3, 5, 7], 1)).toEqual(0);
    expect(binarySearch([1, 3, 5, 7], 7)).toEqual(3);
  });

  it("handles a single-element array and duplicates", () => {
    expect(binarySearch([42], 42)).toEqual(0);
    expect(binarySearch([42], 7)).toEqual(-1);
    const result = binarySearch([1, 2, 2, 2, 3], 2);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(3);
  });
});
