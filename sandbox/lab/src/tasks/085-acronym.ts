/**
 * Task 085: acronym
 *
 * Uppercase first letters of each word.
 */
export function acronym(s: string): string {
  return s
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}
