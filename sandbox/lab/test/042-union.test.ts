import { describe, expect, it } from "vitest";
import { union } from "../src/tasks/042-union";

describe("union", () => {
  it("works", () => {
    expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
    expect(union([], [])).toEqual([]);
  });
});
