/**
 * Task 064: bytesToHuman
 *
 * Format a byte count using units `B, KB, MB, GB` (base 1024), at most one decimal place.
 */
export function bytesToHuman(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) {
    throw new RangeError("bytes must be a non-negative finite number");
  }
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  let rounded = Math.round(value * 10) / 10;
  if (rounded >= 1024 && unit < units.length - 1) {
    rounded = Math.round((rounded / 1024) * 10) / 10;
    unit++;
  }
  return `${rounded} ${units[unit]}`;
}
