import { describe, expect, it } from "vitest";
import { removeDuplicates } from "../src/tasks/032-remove-duplicates";

describe("removeDuplicates", () => {
  it("works", () => {
    expect(removeDuplicates([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    expect(removeDuplicates([])).toEqual([]);
    expect(removeDuplicates([3, 3, 3])).toEqual([3]);
  });
});
