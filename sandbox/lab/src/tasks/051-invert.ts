/**
 * Task 051: invert
 *
 * Swap keys and values.
 */
export function invert(obj: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}
