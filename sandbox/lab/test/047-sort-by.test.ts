import { describe, expect, it } from "vitest";
import { sortBy } from "../src/tasks/047-sort-by";

describe("sortBy", () => {
  it("works", () => {
    expect(sortBy([{ n: 2 }, { n: 1 }], 'n')).toEqual([{ n: 1 }, { n: 2 }]);
    const input = [{ n: 3 }, { n: -1 }, { n: 2 }];
    expect(sortBy(input, 'n')).toEqual([{ n: -1 }, { n: 2 }, { n: 3 }]);
    expect(input[0]).toEqual({ n: 3 });
  });
});
