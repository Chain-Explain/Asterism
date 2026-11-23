/**
 * Task 019: camelCase
 *
 * Convert space-separated words to camelCase.
 */
export function camelCase(s: string): string {
  const words = s.split(" ").filter((word) => word.length > 0);

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}
