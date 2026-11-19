import { describe, expect, it } from "vitest";
import { isEmptyObject } from "../src/tasks/053-is-empty-object";

describe("isEmptyObject", () => {
  it("works", () => {
    expect(isEmptyObject({})).toEqual(true);
    expect(isEmptyObject({ a: 1 })).toEqual(false);
    expect(isEmptyObject([])).toEqual(true);
    expect(isEmptyObject({ a: undefined })).toEqual(false);
  });
});
