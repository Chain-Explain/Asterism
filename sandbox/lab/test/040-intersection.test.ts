import { describe, expect, it } from "vitest";
import { intersection } from "../src/tasks/040-intersection";

describe("intersection", () => {
  it("works", () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(intersection([1, 1, 2], [1])).toEqual([1]);
  });
});
