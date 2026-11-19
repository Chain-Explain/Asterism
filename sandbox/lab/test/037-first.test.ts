import { describe, expect, it } from "vitest";
import { first } from "../src/tasks/037-first";

describe("first", () => {
  it("works", () => {
    expect(first([1, 2, 3], 2)).toEqual([1, 2]);
    expect(first([1], 3)).toEqual([1]);
    expect(first([1, 2, 3], 0)).toEqual([]);
    expect(first([1, 2, 3], -1)).toEqual([]);
  });
});
