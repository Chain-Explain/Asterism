import { describe, expect, it } from "vitest";
import { isPalindrome } from "../src/tasks/016-is-palindrome";

describe("isPalindrome", () => {
  it("ignores punctuation, spaces and case", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  });

  it("rejects strings that are not palindromes", () => {
    expect(isPalindrome("hello")).toEqual(false);
  });

  it("handles single characters and empty strings", () => {
    expect(isPalindrome("a")).toEqual(true);
    expect(isPalindrome("")).toEqual(true);
  });

  it("supports digits and mixed separators", () => {
    expect(isPalindrome("12-21")).toEqual(true);
    expect(isPalindrome("RaceCar!")).toEqual(true);
    expect(isPalindrome("1a1")).toEqual(true);
  });
});
