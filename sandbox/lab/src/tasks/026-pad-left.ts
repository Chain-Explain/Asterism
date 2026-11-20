/**
 * Task 026: padLeft
 *
 * Pad the start of `s` with `ch` until it is `length` long. Longer strings are returned unchanged.
 */
export function padLeft(s: string, length: number, ch: string): string {
  if (s.length >= length) return s;
  return ch.repeat(length - s.length) + s;
}
