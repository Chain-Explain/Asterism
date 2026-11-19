import { describe, expect, it } from "vitest";
import { stripSuffix } from "../src/tasks/029-strip-suffix";

describe("stripSuffix", () => {
  it("works", () => {
    expect(stripSuffix('foobar', 'bar')).toEqual('foo');
    expect(stripSuffix('foo', 'bar')).toEqual('foo');
    expect(stripSuffix('foo', '')).toEqual('foo');
    expect(stripSuffix('bar', 'bar')).toEqual('');
  });
});
