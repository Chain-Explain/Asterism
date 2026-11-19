/**
 * Task 052: mapValues
 *
 * New object with `fn` applied to every value.
 */
export function mapValues(obj: Record<string, number>, fn: (v: number) => number): Record<string, number> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
}
