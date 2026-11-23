/**
 * Task 012: gcd
 *
 * Greatest common divisor of two non-negative integers.
 */
export function gcd(a: number, b: number): number {
  let left = Math.abs(a);
  let right = Math.abs(b);

  while (right !== 0) {
    const remainder = left % right;
    left = right;
    right = remainder;
  }

  return left;
}
