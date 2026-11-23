import { describe, expect, it } from "vitest";
import { fibonacci } from "../src/tasks/010-fibonacci";

describe("fibonacci", () => {
  it("returns the first two numbers", () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
  });

  it("computes later numbers", () => {
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(7)).toEqual(13);
    expect(fibonacci(10)).toEqual(55);
  });
});
