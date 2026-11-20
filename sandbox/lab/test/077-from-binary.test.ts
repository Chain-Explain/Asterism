import { describe, expect, it } from "vitest";
import { fromBinary } from "../src/tasks/077-from-binary";

describe("fromBinary", () => {
  it("parses documented examples", () => {
    expect(fromBinary("101")).toEqual(5);
    expect(fromBinary("0")).toEqual(0);
  });

  it("parses longer values and leading zeroes", () => {
    expect(fromBinary("11111111")).toEqual(255);
    expect(fromBinary("000101")).toEqual(5);
  });

  it("rejects empty or non-binary input", () => {
    expect(() => fromBinary("")).toThrow(RangeError);
    expect(() => fromBinary("102")).toThrow(RangeError);
    expect(() => fromBinary("10.1")).toThrow(RangeError);
  });
});
