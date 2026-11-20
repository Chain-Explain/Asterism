import { describe, expect, it } from "vitest";
import { acronym } from "../src/tasks/085-acronym";

describe("acronym", () => {
  it("builds an acronym from space-separated words", () => {
    expect(acronym("portable network graphics")).toEqual("PNG");
  });

  it("ignores leading, trailing and repeated whitespace", () => {
    expect(acronym("  as soon as possible ")).toEqual("ASAP");
  });

  it("handles single words and empty input", () => {
    expect(acronym("radar")).toEqual("R");
    expect(acronym("")).toEqual("");
    expect(acronym("   ")).toEqual("");
  });

  it("uppercases the first letter of mixed-case words", () => {
    expect(acronym("portable Network Graphics")).toEqual("PNG");
  });
});
