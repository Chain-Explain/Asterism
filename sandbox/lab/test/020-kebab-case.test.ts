import { describe, expect, it } from "vitest";
import { kebabCase } from "../src/tasks/020-kebab-case";

describe("kebabCase", () => {
  it("lowercases words and joins them with hyphens", () => {
    expect(kebabCase("Hello World")).toEqual("hello-world");
    expect(kebabCase("foo bar")).toEqual("foo-bar");
  });

  it("handles a single word and an empty string", () => {
    expect(kebabCase("Hello")).toEqual("hello");
    expect(kebabCase("")).toEqual("");
  });
});
