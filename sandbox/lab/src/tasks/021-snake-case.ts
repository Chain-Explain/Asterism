/**
 * Task 021: snakeCase
 *
 * Convert space-separated words to snake_case (lowercase, joined by `_`).
 */
export function snakeCase(s: string): string {
  const trimmed = s.trim();
  if (trimmed === "") return "";
  return trimmed.toLowerCase().split(/\s+/).join("_");
}
