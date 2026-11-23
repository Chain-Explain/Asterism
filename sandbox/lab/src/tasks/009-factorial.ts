/**
 * Task 009: factorial
 *
 * `n!` for a non-negative integer. `factorial(0)` is `1`.
 */
export function factorial(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}