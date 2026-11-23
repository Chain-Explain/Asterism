import { describe, expect, it } from "vitest";
import { snakeCase } from "../src/tasks/021-snake-case";

describe("snakeCase", () => {
  it("lowercases words and joins them with underscores", () => {
    expect(snakeCase("Hello World")).toEqual("hello_world");
    expect(snakeCase("foo bar")).toEqual("foo_bar");
  });

  it("handles a single word and an empty string", () => {
    expect(snakeCase("Hello")).toEqual("hello");
    expect(snakeCase("")).toEqual("");
  });
});
