/**
 * Task 055: deepClone
 *
 * Deep copy of a JSON-like value. The copy must not share any nested object or array with the original.
 */
export function deepClone(value: unknown): unknown {
  if (typeof value !== "object" || value === null) return value;
  if (Array.isArray(value)) return value.map((item) => deepClone(item));
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, deepClone(item)]),
  );
}
