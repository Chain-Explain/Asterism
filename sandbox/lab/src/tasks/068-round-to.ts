/**
 * Task 068: roundTo
 *
 * Round `n` to the given number of decimal places.
 */
export function roundTo(n: number, decimals: number): number {
  if (!Number.isFinite(n) || !Number.isInteger(decimals) || decimals < 0) {
    throw new RangeError("expected a finite number and non-negative integer decimals");
  }

  const factor = 10 ** decimals;
  // Nudge by one machine epsilon in the direction of the number so values
  // such as 1.005 round as expected instead of to 1. Rounding the magnitude
  // keeps halves symmetric: -2.5 rounds to -3 just as 2.5 rounds to 3.
  const adjusted = n + Math.sign(n) * Number.EPSILON;
  return Math.sign(adjusted) * Math.round(Math.abs(adjusted) * factor) / factor;
}
