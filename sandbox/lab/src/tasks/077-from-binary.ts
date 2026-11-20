/**
 * Task 077: fromBinary
 *
 * Parse a binary string into a number.
 */
export function fromBinary(s: string): number {
  if (!/^[01]+$/.test(s)) {
    throw new RangeError("expected a non-empty binary string");
  }

  let value = 0;
  for (const digit of s) {
    value = value * 2 + Number(digit);
  }
  return value;
}
