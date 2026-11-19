/**
 * Task 050: omit
 *
 * New object without the listed keys.
 */
export function omit(obj: Record<string, number>, keys: string[]): Record<string, number> {
  const drop = new Set(keys);
  return Object.fromEntries(Object.entries(obj).filter(([key]) => !drop.has(key)));
}
