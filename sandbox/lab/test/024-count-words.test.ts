import { describe, expect, it } from "vitest";
import { countWords } from "../src/tasks/024-count-words";

describe("countWords", () => {
  it("counts words separated by repeated whitespace", () => {
    expect(countWords("one two  three")).toEqual(3);
  });

  it("returns zero for empty and blank strings", () => {
    expect(countWords("")).toEqual(0);
    expect(countWords("   \t\n  ")).toEqual(0);
  });

  it("ignores leading and trailing whitespace", () => {
    expect(countWords("  hello world  ")).toEqual(2);
  });

  it("counts a single word", () => {
    expect(countWords("solo")).toEqual(1);
  });
});
