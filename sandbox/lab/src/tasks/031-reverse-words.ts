/**
 * Task 031: reverseWords
 *
 * Reverse the order of space-separated words.
 */
export function reverseWords(s: string): string {
  return s.split(" ").reverse().join(" ");
}
