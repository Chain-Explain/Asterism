import { describe, expect, it } from "vitest";
import { omit } from "../src/tasks/050-omit";

describe("omit", () => {
  it("works", () => {
    expect(omit({ a: 1, b: 2 }, ['a'])).toEqual({ b: 2 });
    const input = { a: 1 };
    expect(omit(input, ['z'])).toEqual({ a: 1 });
    expect(omit(input, ['a'])).toEqual({});
    expect(input).toEqual({ a: 1 });
  });
});
