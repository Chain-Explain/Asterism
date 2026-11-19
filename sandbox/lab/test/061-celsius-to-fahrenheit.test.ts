import { describe, expect, it } from "vitest";
import { celsiusToFahrenheit } from "../src/tasks/061-celsius-to-fahrenheit";

describe("celsiusToFahrenheit", () => {
  it("works", () => {
    expect(celsiusToFahrenheit(0)).toEqual(32);
    expect(celsiusToFahrenheit(100)).toEqual(212);
    expect(celsiusToFahrenheit(-40)).toEqual(-40);
    expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6);
  });
});
