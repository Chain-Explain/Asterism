/**
 * Task 038: last
 *
 * The last `n` items (fewer if the array is shorter). `n = 0` gives `[]`.
 */
export function last(items: number[], n: number): number[] {
  return n <= 0 ? [] : items.slice(-n);
}
