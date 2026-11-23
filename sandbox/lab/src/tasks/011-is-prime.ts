/**
 * Task 011: isPrime
 *
 * Returns true when a number is prime.
 */
export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let divisor = 3; divisor <= n / divisor; divisor += 2) {
    if (n % divisor === 0) return false;
  }

  return true;
}
