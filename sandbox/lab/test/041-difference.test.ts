import { describe, expect, it } from "vitest";
import { difference } from "../src/tasks/041-difference";

describe("difference", () => {
  it("works", () => {
    expect(difference([1, 2, 3], [2])).toEqual([1, 3]);
    expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3]);
  });
});
