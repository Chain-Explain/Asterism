/**
 * Task 025: countVowels
 *
 * Counts a, e, i, o and u in either case.
 */
export function countVowels(s: string): number {
  const matches = s.match(/[aeiou]/gi);
  return matches === null ? 0 : matches.length;
}
