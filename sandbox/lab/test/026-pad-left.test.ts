import { describe, expect, it } from "vitest";
import { padLeft } from "../src/tasks/026-pad-left";

describe("padLeft", () => {
  it("works", () => {
    expect(padLeft('5', 3, '0')).toEqual('005');
    expect(padLeft('abc', 2, '0')).toEqual('abc');
  });
});
