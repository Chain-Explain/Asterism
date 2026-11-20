import { describe, expect, it } from "vitest";
import { countVowels } from "../src/tasks/025-count-vowels";

describe("countVowels", () => {
  it("works", () => {
    expect(countVowels('Hello')).toEqual(2);
    expect(countVowels('xyz')).toEqual(0);
    expect(countVowels('AEIOUaeiou')).toEqual(10);
    expect(countVowels('')).toEqual(0);
  });
});
