/**
 * Task 020: kebabCase
 *
 * Convert space-separated words to kebab-case (lowercase, joined by `-`).
 */
export function kebabCase(s: string): string {
  const trimmed = s.trim();
  if (trimmed === "") return "";
  return trimmed.toLowerCase().split(/\s+/).join("-");
}
