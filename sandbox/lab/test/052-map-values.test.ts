import { describe, expect, it } from "vitest";
import { mapValues } from "../src/tasks/052-map-values";

describe("mapValues", () => {
  it("works", () => {
    expect(mapValues({ a: 1, b: 2 }, (v) => v * 2)).toEqual({ a: 2, b: 4 });
    expect(mapValues({}, (v) => v)).toEqual({});
  });
});
