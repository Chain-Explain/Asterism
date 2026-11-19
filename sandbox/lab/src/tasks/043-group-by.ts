/**
 * Task 043: groupBy
 *
 * Group items by the key returned from `fn`.
 */
export function groupBy(items: number[], fn: (n: number) => string): Record<string, number[]> {
  const groups = new Map<string, number[]>();
  for (const item of items) {
    const key = fn(item);
    const group = groups.get(key);
    if (group) group.push(item);
    else groups.set(key, [item]);
  }
  return Object.fromEntries(groups);
}
