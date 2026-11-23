import { describe, expect, it } from "vitest";
import { factorial } from "../src/tasks/009-factorial";

describe("factorial", () => {
  it("returns 1 for 0 and 1", () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
  });

  it("computes small factorials", () => {
    expect(factorial(5)).toEqual(120);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});