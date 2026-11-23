import { describe, expect, it } from "vitest";
import { isPrime } from "../src/tasks/011-is-prime";

describe("isPrime", () => {
  it("recognises small primes", () => {
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(17)).toEqual(true);
    expect(isPrime(97)).toEqual(true);
  });

  it("rejects numbers below two and negative numbers", () => {
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(0)).toEqual(false);
    expect(isPrime(-7)).toEqual(false);
  });

  it("rejects composite numbers", () => {
    expect(isPrime(15)).toEqual(false);
    expect(isPrime(9)).toEqual(false);
    expect(isPrime(100)).toEqual(false);
  });

  it("rejects non-integers", () => {
    expect(isPrime(2.5)).toEqual(false);
  });
});
