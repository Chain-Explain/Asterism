/**
 * Task 033: chunk
 *
 * Split an array into groups of `size` (the last group may be shorter).
 */
export function chunk(items: number[], size: number): number[][] {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError("size must be a positive integer");
  }
  const out: number[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}
