/**
 * Task 020: kebabCase
 *
 * Convert space-separated words to kebab-case (lowercase, joined by `-`).
 */
export function kebabCase(s: string): string {
  return s
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word.toLowerCase())
    .join("-");
}
