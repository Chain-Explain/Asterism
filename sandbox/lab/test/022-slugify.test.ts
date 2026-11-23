import { describe, expect, it } from "vitest";
import { slugify } from "../src/tasks/022-slugify";

describe("slugify", () => {
  it("lowercases and replaces punctuation with single hyphens", () => {
    expect(slugify("Hello, World!")).toEqual("hello-world");
  });

  it("collapses whitespace and trims leading and trailing separators", () => {
    expect(slugify("  Many   spaces  ")).toEqual("many-spaces");
  });

  it("keeps digits and existing hyphens", () => {
    expect(slugify("TypeScript 2026 -- guide")).toEqual("typescript-2026-guide");
  });

  it("returns an empty string when nothing alphanumeric remains", () => {
    expect(slugify(" !!! ")).toEqual("");
  });
});
