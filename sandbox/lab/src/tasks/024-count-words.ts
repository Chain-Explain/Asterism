/**
 * Task 024: countWords
 *
 * Number of whitespace-separated words. An empty or blank string gives `0`.
 */
export function countWords(s: string): number {
  const trimmed = s.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}
