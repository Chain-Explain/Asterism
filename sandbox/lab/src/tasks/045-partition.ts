/**
 * Task 045: partition
 *
 * Split into `[matching, notMatching]`.
 */
export function partition(items: number[], pred: (n: number) => boolean): [number[], number[]] {
  const matching: number[] = [];
  const rest: number[] = [];
  for (const item of items) (pred(item) ? matching : rest).push(item);
  return [matching, rest];
}
