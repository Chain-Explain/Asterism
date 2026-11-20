import { describe, expect, it } from "vitest";
import { snakeCase } from "../src/tasks/021-snake-case";

describe("snakeCase", () => {
  it("works", () => {
    expect(snakeCase('Hello World')).toEqual('hello_world');
    expect(snakeCase('foo  bar')).toEqual('foo_bar');
    expect(snakeCase('  Single  ')).toEqual('single');
    expect(snakeCase('')).toEqual('');
  });
});
