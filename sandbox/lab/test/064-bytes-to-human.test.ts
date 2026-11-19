import { describe, expect, it } from "vitest";
import { bytesToHuman } from "../src/tasks/064-bytes-to-human";

describe("bytesToHuman", () => {
  it("works", () => {
    expect(bytesToHuman(0)).toEqual('0 B');
    expect(bytesToHuman(1536)).toEqual('1.5 KB');
    expect(bytesToHuman(1048576)).toEqual('1 MB');
    expect(bytesToHuman(1)).toEqual('1 B');
    expect(bytesToHuman(1023)).toEqual('1023 B');
    expect(bytesToHuman(1024)).toEqual('1 KB');
    expect(bytesToHuman(1048575)).toEqual('1 MB');
    expect(bytesToHuman(1024 ** 4)).toEqual('1024 GB');
    expect(() => bytesToHuman(-1)).toThrow(RangeError);
  });
});
