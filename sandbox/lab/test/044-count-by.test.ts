import { describe, expect, it } from "vitest";
import { countBy } from "../src/tasks/044-count-by";

describe("countBy", () => {
  it("works", () => {
    expect(countBy(['a', 'bb', 'cc'], (s) => s.length)).toEqual({ 1: 1, 2: 2 });
    expect(countBy([], () => 1)).toEqual({});
  });
});
