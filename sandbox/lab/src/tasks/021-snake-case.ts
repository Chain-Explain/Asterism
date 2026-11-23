/**
 * Task 021: snakeCase
 *
 * Convert space-separated words to snake_case (lowercase, joined by `_`).
 */
export function snakeCase(s: string): string {
  return s
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word.toLowerCase())
    .join("_");
}
