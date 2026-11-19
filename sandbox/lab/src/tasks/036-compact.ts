/**
 * Task 036: compact
 *
 * Remove falsy values (`0`, `''`, `null`, `undefined`, `false`, `NaN`).
 */
export function compact(items: unknown[]): unknown[] {
  return items.filter(Boolean);
}
