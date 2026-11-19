import { describe, expect, it } from "vitest";
import { partition } from "../src/tasks/045-partition";

describe("partition", () => {
  it("works", () => {
    expect(partition([1, 2, 3, 4], (n) => n > 2)).toEqual([[3, 4], [1, 2]]);
    expect(partition([], () => true)).toEqual([[], []]);
  });
});
