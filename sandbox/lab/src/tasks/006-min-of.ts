/**
 * Task 006: minOf
 *
 * Smallest number, or `undefined` for an empty array.
 */
export function minOf(nums: number[]): number | undefined {
  if (nums.length === 0) return undefined;

  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }

  return min;
}