/**
 * Task 047: sortBy
 *
 * Return a new array sorted ascending by `item[key]`.
 */
export function sortBy(items: Record<string, number>[], key: string): Record<string, number>[] {
  return [...items].sort((x, y) => x[key] - y[key]);
}
