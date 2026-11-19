/**
 * Task 046: sortNumbers
 *
 * Return a new array sorted ascending by numeric value (not as strings). Do not mutate the input.
 */
export function sortNumbers(nums: number[]): number[] {
  return [...nums].sort((x, y) => x - y);
}
