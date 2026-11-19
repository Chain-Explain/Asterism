import { describe, expect, it } from "vitest";
import { get } from "../src/tasks/056-get";

describe("get", () => {
  it("works", () => {
    expect(get({ a: { b: 5 } }, 'a.b')).toEqual(5);
    expect(get({ a: 1 }, 'x.y', 'none')).toEqual('none');
    expect(get({ a: { b: 0 } }, 'a.b', 9)).toEqual(0);
    expect(get({ a: { b: 5 } }, 'a.c', 'x')).toEqual('x');
    expect(get(null, 'a', 'd')).toEqual('d');
    expect(get({ a: [10, 20] }, 'a.1')).toEqual(20);
    expect(get({}, 'toString', 'n')).toEqual('n');
  });
});
