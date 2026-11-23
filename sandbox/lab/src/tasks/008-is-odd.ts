/**
 * Task 008: isOdd
 *
 * True when `n` is an odd integer (negative numbers included).
 */
export function isOdd(n: number): boolean {
  return Number.isInteger(n) && n % 2 !== 0;
}