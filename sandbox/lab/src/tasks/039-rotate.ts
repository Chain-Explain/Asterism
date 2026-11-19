/**
 * Task 039: rotate
 *
 * Rotate left by `k` places. `k` may be larger than the array length.
 */
export function rotate(items: number[], k: number): number[] {
  if (items.length === 0) return [];
  const shift = ((k % items.length) + items.length) % items.length;
  return [...items.slice(shift), ...items.slice(0, shift)];
}
