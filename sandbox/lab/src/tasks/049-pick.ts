/**
 * Task 049: pick
 *
 * New object with only the listed keys (ignore keys that do not exist).
 */
export function pick(obj: Record<string, number>, keys: string[]): Record<string, number> {
  const out: [string, number][] = [];
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) out.push([key, obj[key]]);
  }
  return Object.fromEntries(out);
}
