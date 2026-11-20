import { describe, expect, it } from "vitest";
import { kebabCase } from "../src/tasks/020-kebab-case";

describe("kebabCase", () => {
  it("works", () => {
    expect(kebabCase('Hello World')).toEqual('hello-world');
    expect(kebabCase('foo  bar')).toEqual('foo-bar');
    expect(kebabCase('  Single  ')).toEqual('single');
    expect(kebabCase('')).toEqual('');
  });
});
