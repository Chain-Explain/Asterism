import { describe, expect, it } from "vitest";
import { isOdd } from "../src/tasks/008-is-odd";

describe("isOdd", () => {
  it("recognises odd numbers", () => {
    expect(isOdd(3)).toEqual(true);
    expect(isOdd(1)).toEqual(true);
    expect(isOdd(99)).toEqual(true);
  });

  it("rejects even numbers and zero", () => {
    expect(isOdd(0)).toEqual(false);
    expect(isOdd(2)).toEqual(false);
    expect(isOdd(100)).toEqual(false);
  });

  it("handles negative numbers", () => {
    expect(isOdd(-3)).toEqual(true);
    expect(isOdd(-4)).toEqual(false);
  });

  it("rejects non-integers", () => {
    expect(isOdd(2.5)).toEqual(false);
  });
});