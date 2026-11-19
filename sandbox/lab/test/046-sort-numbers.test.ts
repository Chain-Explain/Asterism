import { describe, expect, it } from "vitest";
import { sortNumbers } from "../src/tasks/046-sort-numbers";

describe("sortNumbers", () => {
  it("works", () => {
    expect(sortNumbers([10, 2, 33, 4])).toEqual([2, 4, 10, 33]);
    const input = [3, 1];
    sortNumbers(input);
    expect(input).toEqual([3, 1]);
    expect(sortNumbers([-1, -10, 5])).toEqual([-10, -1, 5]);
  });
});
