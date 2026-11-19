import { describe, expect, it } from "vitest";
import { rgbToHex } from "../src/tasks/060-rgb-to-hex";

describe("rgbToHex", () => {
  it("works", () => {
    expect(rgbToHex(255, 128, 0)).toEqual('#ff8000');
    expect(rgbToHex(0, 0, 0)).toEqual('#000000');
    expect(rgbToHex(1, 2, 3)).toEqual('#010203');
    expect(() => rgbToHex(256, 0, 0)).toThrow(RangeError);
  });
});
