/**
 * Task 044: countBy
 *
 * Count how many items map to each key returned from `fn`.
 */
export function countBy(items: string[], fn: (s: string) => number): Record<number, number> {
  const counts = new Map<number, number>();
  for (const item of items) {
    const key = fn(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return Object.fromEntries(counts);
}
