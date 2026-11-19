/**
 * Task 035: zip
 *
 * Pair items by index. The result is as long as the shorter input.
 */
export function zip(a: number[], b: string[]): [number, string][] {
  const len = Math.min(a.length, b.length);
  const out: [number, string][] = [];
  for (let i = 0; i < len; i++) out.push([a[i], b[i]]);
  return out;
}
