import { describe, expect, it } from "vitest";
import { isWeekend } from "../src/tasks/072-is-weekend";

describe("isWeekend", () => {
  it("recognises Saturdays and Sundays", () => {
    expect(isWeekend("2024-01-06")).toEqual(true);
    expect(isWeekend("2024-01-07")).toEqual(true);
  });

  it("rejects weekdays", () => {
    expect(isWeekend("2024-01-08")).toEqual(false);
    expect(isWeekend("2024-01-05")).toEqual(false);
  });

  it("rejects malformed or impossible dates", () => {
    expect(() => isWeekend("06/01/2024")).toThrow(RangeError);
    expect(() => isWeekend("2024-02-30")).toThrow(RangeError);
  });
});
