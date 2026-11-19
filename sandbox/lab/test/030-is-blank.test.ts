import { describe, expect, it } from "vitest";
import { isBlank } from "../src/tasks/030-is-blank";

describe("isBlank", () => {
  it("works", () => {
    expect(isBlank('')).toEqual(true);
    expect(isBlank('   ')).toEqual(true);
    expect(isBlank(' a ')).toEqual(false);
    expect(isBlank('\t\n')).toEqual(true);
  });
});
