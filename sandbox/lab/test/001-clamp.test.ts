import { describe, expect, it } from "vitest";
import { clamp } from "../src/tasks/001-clamp";

describe("clamp", () => {
  it("keeps numbers inside the range unchanged", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("limits numbers outside the range to its nearest endpoint", () => {
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(11, 0, 10)).toBe(10);
  });

  it("includes the range endpoints", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
});
