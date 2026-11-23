import { describe, expect, it } from "vitest";
import { countVowels } from "../src/tasks/025-count-vowels";

describe("countVowels", () => {
  it("counts vowels case-insensitively", () => {
    expect(countVowels("Hello")).toEqual(2);
    expect(countVowels("AEIOU")).toEqual(5);
  });

  it("returns zero when there are no vowels", () => {
    expect(countVowels("xyz")).toEqual(0);
    expect(countVowels("rhythm")).toEqual(0);
  });

  it("handles empty strings", () => {
    expect(countVowels("")).toEqual(0);
  });

  it("counts repeated vowels and ignores other characters", () => {
    expect(countVowels("a e i o u! 123")).toEqual(5);
  });
});
