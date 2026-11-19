/**
 * Task 037: first
 *
 * The first `n` items (fewer if the array is shorter).
 */
export function first(items: number[], n: number): number[] {
  return items.slice(0, Math.max(0, n));
}
