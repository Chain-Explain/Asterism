import { describe, expect, it } from "vitest";
import { stripPrefix } from "../src/tasks/028-strip-prefix";

describe("stripPrefix", () => {
  it("works", () => {
    expect(stripPrefix('foobar', 'foo')).toEqual('bar');
    expect(stripPrefix('bar', 'foo')).toEqual('bar');
  });
});
