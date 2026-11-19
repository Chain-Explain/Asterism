/**
 * Task 059: hexToRgb
 *
 * Convert `#rrggbb` to `[r, g, b]`.
 */
export function hexToRgb(hex: string): [number, number, number] {
  if (!/^#[0-9a-fA-F]{6}$/.test(hex)) {
    throw new RangeError("expected a #rrggbb color");
  }
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}
