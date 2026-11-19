/**
 * Task 029: stripSuffix
 *
 * Remove `suffix` from the end of `s` if present.
 */
export function stripSuffix(s: string, suffix: string): string {
  if (suffix === "" || !s.endsWith(suffix)) return s;
  return s.slice(0, s.length - suffix.length);
}
