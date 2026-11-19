import { describe, expect, it } from "vitest";
import { invert } from "../src/tasks/051-invert";

describe("invert", () => {
  it("works", () => {
    expect(invert({ a: 'x', b: 'y' })).toEqual({ x: 'a', y: 'b' });
    expect(invert({})).toEqual({});
  });
});
