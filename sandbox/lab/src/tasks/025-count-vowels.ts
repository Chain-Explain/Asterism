/**
 * Task 025: countVowels
 *
 * Count the vowels `a e i o u` (either case).
 */
export function countVowels(s: string): number {
  let count = 0;
  for (const ch of s) {
    if ("aeiouAEIOU".includes(ch)) {
      count += 1;
    }
  }
  return count;
}
