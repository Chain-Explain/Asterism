/**
 * Task 089: binarySearch
 *
 * Index of `target` in an ascending array, or `-1`. Uses binary search.
 */
export function binarySearch(sorted: number[], target: number): number {
  let low = 0;
  let high = sorted.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const value = sorted[mid];

    if (value === target) return mid;
    if (value < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
