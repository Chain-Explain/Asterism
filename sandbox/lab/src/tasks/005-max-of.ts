export function maxOf(nums: number[]): number | undefined {
  if (nums.length === 0) return undefined;

  let max = nums[0];
  for (const num of nums) {
    if (num > max) max = num;
  }

  return max;
}
