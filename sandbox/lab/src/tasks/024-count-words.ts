/**
 * Task 024: countWords
 *
 * Counts whitespace-separated words in a string.
 */
export function countWords(s: string): number {
  const trimmed = s.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}
