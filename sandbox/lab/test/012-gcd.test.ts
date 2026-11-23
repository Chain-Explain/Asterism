import { describe, expect, it } from "vitest";
import { gcd } from "../src/tasks/012-gcd";

describe("gcd", () => {
  it("finds the greatest common divisor", () => {
    expect(gcd(12, 18)).toEqual(6);
    expect(gcd(48, 18)).toEqual(6);
  });

  it("returns 1 for coprime numbers", () => {
    expect(gcd(7, 13)).toEqual(1);
  });

  it("returns the non-zero argument when one input is zero", () => {
    expect(gcd(0, 5)).toEqual(5);
    expect(gcd(5, 0)).toEqual(5);
  });

  it("returns zero when both inputs are zero", () => {
    expect(gcd(0, 0)).toEqual(0);
  });

  it("handles the divisor appearing before the dividend", () => {
    expect(gcd(18, 12)).toEqual(6);
  });
});
