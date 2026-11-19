import { describe, expect, it } from "vitest";
import { rotate } from "../src/tasks/039-rotate";

describe("rotate", () => {
  it("works", () => {
    expect(rotate([1, 2, 3, 4], 1)).toEqual([2, 3, 4, 1]);
    expect(rotate([1, 2, 3], 4)).toEqual([2, 3, 1]);
    expect(rotate([], 2)).toEqual([]);
    expect(rotate([1, 2, 3, 4], -1)).toEqual([4, 1, 2, 3]);
    expect(rotate([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });
});
