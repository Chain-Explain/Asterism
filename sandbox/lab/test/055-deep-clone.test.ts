import { describe, expect, it } from "vitest";
import { deepClone } from "../src/tasks/055-deep-clone";

describe("deepClone", () => {
  it("works", () => {
    const src = { a: [1, { b: 2 }], c: 'x' };
    const copy = deepClone(src) as typeof src;
    expect(copy).toEqual(src);
    expect(copy).not.toBe(src);
    expect(copy.a).not.toBe(src.a);
    expect(copy.a[1]).not.toBe(src.a[1]);
    expect(deepClone(5)).toEqual(5);
    expect(deepClone(null)).toEqual(null);
    expect(deepClone([1, [2]])).toEqual([1, [2]]);
  });
});
