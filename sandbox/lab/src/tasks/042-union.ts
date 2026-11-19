/**
 * Task 042: union
 *
 * All distinct values from both arrays, in order of first appearance.
 */
export function union(a: number[], b: number[]): number[] {
  return [...new Set([...a, ...b])];
}
