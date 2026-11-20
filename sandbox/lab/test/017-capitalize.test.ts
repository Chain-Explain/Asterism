import { describe, expect, it } from "vitest";
import { capitalize } from "../src/tasks/017-capitalize";

describe("capitalize", () => {
  it("works", () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('')).toEqual('');
  });
});
