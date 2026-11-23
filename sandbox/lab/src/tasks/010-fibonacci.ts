/**
 * Task 010: fibonacci
 *
 * The nth Fibonacci number, starting 0, 1, 1, 2, ... (`fibonacci(0)` is `0`).
 */
export function fibonacci(n: number): number {
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n; i++) {
    [previous, current] = [current, previous + current];
  }

  return previous;
}
