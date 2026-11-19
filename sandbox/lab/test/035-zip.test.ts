import { describe, expect, it } from "vitest";
import { zip } from "../src/tasks/035-zip";

describe("zip", () => {
  it("works", () => {
    expect(zip([1, 2, 3], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']]);
    expect(zip([], ['a'])).toEqual([]);
  });
});
