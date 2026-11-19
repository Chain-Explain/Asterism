/**
 * Task 058: isHexColor
 *
 * True for `#rgb` or `#rrggbb` (hex digits, either case).
 */
export function isHexColor(s: string): boolean {
  return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(s);
}
