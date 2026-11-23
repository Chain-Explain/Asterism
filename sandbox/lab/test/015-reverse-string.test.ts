import { describe, expect, it } from "vitest";
import { reverseString } from "../src/tasks/015-reverse-string";

describe("reverseString", () => {
  it("reverses the characters", () => {
    expect(reverseString("abc")).toEqual("cba");
    expect(reverseString("hello")).toEqual("olleh");
  });

  it("returns an empty string unchanged", () => {
    expect(reverseString("")).toEqual("");
  });

  it("handles a single character and palindromes", () => {
    expect(reverseString("x")).toEqual("x");
    expect(reverseString("racecar")).toEqual("racecar");
  });

  it("keeps spaces and punctuation", () => {
    expect(reverseString("a b!")).toEqual("!b a");
  });
});