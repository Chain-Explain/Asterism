/**
 * Task 056: get
 *
 * Read a nested value by dot path (`'a.b.c'`). Return `fallback` when any step is missing.
 */
export function get(obj: unknown, path: string, fallback?: unknown): unknown {
  let current: unknown = obj;
  for (const key of path.split(".")) {
    if (
      typeof current !== "object" ||
      current === null ||
      !Object.prototype.hasOwnProperty.call(current, key)
    ) {
      return fallback;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}
