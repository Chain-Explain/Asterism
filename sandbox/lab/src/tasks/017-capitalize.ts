/**
 * Task 017: capitalize
 *
 * Uppercase the first character and leave the rest unchanged.
 */
export function capitalize(s: string): string {
  if (s === "") return s;
  return s[0].toUpperCase() + s.slice(1);
}
