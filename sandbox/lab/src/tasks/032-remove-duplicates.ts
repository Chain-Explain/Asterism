/**
 * Task 032: removeDuplicates
 *
 * Remove duplicates, keeping the first occurrence and the original order.
 */
export function removeDuplicates(items: number[]): number[] {
  return [...new Set(items)];
}
