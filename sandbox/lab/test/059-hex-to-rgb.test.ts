import { describe, expect, it } from "vitest";
import { hexToRgb } from "../src/tasks/059-hex-to-rgb";

describe("hexToRgb", () => {
  it("works", () => {
    expect(hexToRgb('#ff8000')).toEqual([255, 128, 0]);
    expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
    expect(hexToRgb('#FFFFFF')).toEqual([255, 255, 255]);
    expect(() => hexToRgb('ff8000')).toThrow(RangeError);
  });
});
