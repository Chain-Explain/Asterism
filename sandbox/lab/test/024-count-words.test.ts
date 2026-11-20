import { describe, expect, it } from "vitest";
import { countWords } from "../src/tasks/024-count-words";

describe("countWords", () => {
  it("works", () => {
    expect(countWords('one two  three')).toEqual(3);
    expect(countWords('')).toEqual(0);
    expect(countWords('   ')).toEqual(0);
    expect(countWords('  hello   world\nnext\ttab  ')).toEqual(4);
  });
});
