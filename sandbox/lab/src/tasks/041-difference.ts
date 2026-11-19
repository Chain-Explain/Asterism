/**
 * Task 041: difference
 *
 * Values in `a` that are not in `b`, in the order of `a`.
 */
export function difference(a: number[], b: number[]): number[] {
  const inB = new Set(b);
  return a.filter((x) => !inB.has(x));
}
