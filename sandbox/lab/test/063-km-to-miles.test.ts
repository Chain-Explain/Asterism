import { describe, expect, it } from "vitest";
import { kmToMiles } from "../src/tasks/063-km-to-miles";

describe("kmToMiles", () => {
  it("works", () => {
    expect(kmToMiles(10)).toEqual(6.21);
    expect(kmToMiles(0)).toEqual(0);
    expect(kmToMiles(1)).toEqual(0.62);
    expect(kmToMiles(42.195)).toEqual(26.22);
  });
});
