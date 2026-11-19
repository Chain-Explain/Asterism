import { describe, expect, it } from "vitest";
import { isHexColor } from "../src/tasks/058-is-hex-color";

describe("isHexColor", () => {
  it("works", () => {
    expect(isHexColor('#fff')).toEqual(true);
    expect(isHexColor('#A1B2C3')).toEqual(true);
    expect(isHexColor('fff')).toEqual(false);
    expect(isHexColor('#ggg')).toEqual(false);
    expect(isHexColor('#ffff')).toEqual(false);
    expect(isHexColor('#12345g')).toEqual(false);
    expect(isHexColor('')).toEqual(false);
  });
});
