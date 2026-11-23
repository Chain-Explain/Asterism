/**
 * Task 016: isPalindrome
 *
 * Checks whether a string reads the same forwards and backwards,
 * ignoring case and non-alphanumeric characters.
 */
export function isPalindrome(s: string): boolean {
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}
