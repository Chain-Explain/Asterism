/**
 * Task 057: isEmail
 *
 * Very simple check: one `@`, no spaces, and a dot after the `@` with text around it.
 */
export function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
