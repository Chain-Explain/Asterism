/**
 * Task 081: isAnagram
 *
 * True when both strings contain the same letters in any order,
 * case-insensitive and ignoring whitespace.
 */
export function isAnagram(a: string, b: string): boolean {
  const normalise = (value: string): string =>
    [...value.toLowerCase().replace(/\s+/g, "")].sort().join("");

  return normalise(a) === normalise(b);
}
