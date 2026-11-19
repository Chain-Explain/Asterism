import { describe, expect, it } from "vitest";
import { reverseWords } from "../src/tasks/031-reverse-words";

describe("reverseWords", () => {
  it("works", () => {
    expect(reverseWords('hello big world')).toEqual('world big hello');
    expect(reverseWords('a')).toEqual('a');
    expect(reverseWords('')).toEqual('');
  });
});
