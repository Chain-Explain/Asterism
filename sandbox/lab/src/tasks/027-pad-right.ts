/**
 * Task 027: padRight
 *
 * Pad the end of `s` with `ch` until it is `length` long. Longer strings are returned unchanged.
 */
export function padRight(s: string, length: number, ch: string): string {
  if (s.length >= length) return s;
  return s + ch.repeat(length - s.length);
}
