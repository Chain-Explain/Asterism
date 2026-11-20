import { describe, expect, it } from "vitest";
import { isAnagram } from "../src/tasks/081-is-anagram";

describe("isAnagram", () => {
  it("recognises anagrams", () => {
    expect(isAnagram("listen", "silent")).toEqual(true);
  });

  it("ignores case and whitespace", () => {
    expect(isAnagram("Dormitory", "dirty room")).toEqual(true);
    expect(isAnagram("a b c", "CAB")).toEqual(true);
  });

  it("rejects different letters", () => {
    expect(isAnagram("abc", "abd")).toEqual(false);
  });

  it("handles empty and different-length inputs", () => {
    expect(isAnagram("", "")).toEqual(true);
    expect(isAnagram("ab", "a")).toEqual(false);
  });
});
