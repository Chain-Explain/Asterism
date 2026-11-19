/**
 * Task 048: sumBy
 *
 * Sum `item[key]` over all items.
 */
export function sumBy(items: Record<string, number>[], key: string): number {
  return items.reduce((total, item) => total + item[key], 0);
}
