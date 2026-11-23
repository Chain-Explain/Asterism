import { describe, expect, it } from "vitest";
import { camelCase } from "../src/tasks/019-camel-case";

describe("camelCase", () => {
  it("joins words and capitalises all but the first", () => {
    expect(camelCase("hello world")).toEqual("helloWorld");
    expect(camelCase("Foo bar baz")).toEqual("fooBarBaz");
  });

  it("handles a single word and an empty string", () => {
    expect(camelCase("Hello")).toEqual("hello");
    expect(camelCase("")).toEqual("");
  });
});
