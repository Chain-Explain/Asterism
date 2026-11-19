import { describe, expect, it } from "vitest";
import { pick } from "../src/tasks/049-pick";

describe("pick", () => {
  it("works", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    expect(pick({ a: 1 }, ['z'])).toEqual({});
  });
});
