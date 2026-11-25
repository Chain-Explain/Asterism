import { describe, expect, it } from "vitest";
import { sum } from "../src/tasks/002-sum";

describe("sum", () => {
  it("adds all numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("returns zero for an empty array", () => {
    expect(sum([])).toBe(0);
  });

  it("adds negative and fractional numbers", () => {
    expect(sum([-2, 0.5, 1])).toBe(-0.5);
  });
});
