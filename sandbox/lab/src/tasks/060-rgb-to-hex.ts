/**
 * Task 060: rgbToHex
 *
 * Convert channels (0-255) to lowercase `#rrggbb`.
 */
export function rgbToHex(r: number, g: number, b: number): string {
  for (const channel of [r, g, b]) {
    if (!Number.isInteger(channel) || channel < 0 || channel > 255) {
      throw new RangeError("channels must be integers between 0 and 255");
    }
  }
  return "#" + [r, g, b].map((channel) => channel.toString(16).padStart(2, "0")).join("");
}
