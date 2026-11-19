import { describe, expect, it } from "vitest";
import { compact } from "../src/tasks/036-compact";

describe("compact", () => {
  it("works", () => {
    expect(compact([0, 1, '', 'a', null, false, 2])).toEqual([1, 'a', 2]);
    expect(compact([NaN, undefined, 0])).toEqual([]);
  });
});
