import { describe, expect, it } from "vitest";
import { sumMatrix } from "../src/tasks/093-sum-matrix";

describe("sumMatrix", () => {
  it("adds every value in every row", () => {
    expect(sumMatrix([[1, 2], [3, 4]])).toEqual(10);
  });

  it("returns zero for an empty matrix or empty rows", () => {
    expect(sumMatrix([])).toEqual(0);
    expect(sumMatrix([[], []])).toEqual(0);
  });

  it("handles negative and fractional values", () => {
    expect(sumMatrix([[-1, 2.5], [0.5, -2]])).toEqual(0);
  });

  it("supports ragged rows", () => {
    expect(sumMatrix([[1], [2, 3, 4], []])).toEqual(10);
  });
});
