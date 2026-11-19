import { describe, expect, it } from "vitest";
import { fahrenheitToCelsius } from "../src/tasks/062-fahrenheit-to-celsius";

describe("fahrenheitToCelsius", () => {
  it("works", () => {
    expect(fahrenheitToCelsius(32)).toEqual(0);
    expect(fahrenheitToCelsius(212)).toEqual(100);
    expect(fahrenheitToCelsius(-40)).toEqual(-40);
  });
});
