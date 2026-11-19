import { describe, expect, it } from "vitest";
import { flatten } from "../src/tasks/034-flatten";

describe("flatten", () => {
  it("works", () => {
    expect(flatten([[1, 2], [3], []])).toEqual([1, 2, 3]);
    expect(flatten([])).toEqual([]);
  });
});
