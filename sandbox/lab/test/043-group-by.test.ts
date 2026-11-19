import { describe, expect, it } from "vitest";
import { groupBy } from "../src/tasks/043-group-by";

describe("groupBy", () => {
  it("works", () => {
    expect(groupBy([1, 2, 3, 4], (n) => (n % 2 === 0 ? 'even' : 'odd'))).toEqual({ odd: [1, 3], even: [2, 4] });
    expect(groupBy([], () => 'x')).toEqual({});
  });
});
