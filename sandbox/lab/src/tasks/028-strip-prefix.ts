/**
 * Task 028: stripPrefix
 *
 * Remove `prefix` from the start of `s` if present.
 */
export function stripPrefix(s: string, prefix: string): string {
  if (prefix === "" || !s.startsWith(prefix)) return s;
  return s.slice(prefix.length);
}
