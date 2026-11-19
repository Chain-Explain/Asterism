import { describe, expect, it } from "vitest";
import { chunk } from "../src/tasks/033-chunk";

describe("chunk", () => {
  it("works", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([], 3)).toEqual([]);
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(() => chunk([1], 0)).toThrow(RangeError);
  });
});
