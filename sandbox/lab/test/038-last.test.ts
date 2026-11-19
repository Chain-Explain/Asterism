import { describe, expect, it } from "vitest";
import { last } from "../src/tasks/038-last";

describe("last", () => {
  it("works", () => {
    expect(last([1, 2, 3], 2)).toEqual([2, 3]);
    expect(last([1, 2, 3], 0)).toEqual([]);
    expect(last([1], 3)).toEqual([1]);
  });
});
