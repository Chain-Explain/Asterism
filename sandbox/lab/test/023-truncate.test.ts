import { describe, expect, it } from "vitest";
import { truncate } from "../src/tasks/023-truncate";

describe("truncate", () => {
  it("replaces the final character with an ellipsis when shortening", () => {
    expect(truncate("hello world", 8)).toEqual("hello w…");
  });

  it("returns strings that already fit unchanged", () => {
    expect(truncate("hi", 5)).toEqual("hi");
    expect(truncate("hello", 5)).toEqual("hello");
  });

  it("uses an ellipsis on its own when only one character is allowed", () => {
    expect(truncate("hello", 1)).toEqual("…");
  });

  it("returns an empty string for non-positive limits", () => {
    expect(truncate("hello", 0)).toEqual("");
    expect(truncate("hello", -3)).toEqual("");
  });

  it("counts Unicode code points rather than UTF-16 units", () => {
    expect(truncate("😀😀😀", 2)).toEqual("😀…");
  });
});
