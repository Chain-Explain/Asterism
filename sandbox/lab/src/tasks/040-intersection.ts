/**
 * Task 040: intersection
 *
 * Values present in both arrays, in the order of `a`, without duplicates.
 */
export function intersection(a: number[], b: number[]): number[] {
  const inB = new Set(b);
  return [...new Set(a)].filter((x) => inB.has(x));
}
