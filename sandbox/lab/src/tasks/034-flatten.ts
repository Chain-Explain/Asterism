/**
 * Task 034: flatten
 *
 * Flatten one level of nesting.
 */
export function flatten(items: number[][]): number[] {
  const out: number[] = [];
  for (const group of items) {
    for (const item of group) out.push(item);
  }
  return out;
}
