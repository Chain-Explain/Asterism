import { describe, expect, it } from "vitest";
import { sumBy } from "../src/tasks/048-sum-by";

describe("sumBy", () => {
  it("works", () => {
    expect(sumBy([{ n: 1 }, { n: 4 }], 'n')).toEqual(5);
    expect(sumBy([], 'n')).toEqual(0);
    expect(sumBy([{ n: 1.5 }, { n: 2.5 }], 'n')).toEqual(4);
  });
});
