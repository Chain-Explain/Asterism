/**
 * Task 022: slugify
 *
 * Converts text into a lowercase URL slug with single hyphen separators.
 */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
