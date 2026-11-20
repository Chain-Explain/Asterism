/**
 * Task 093: sumMatrix
 *
 * Sum of every value in a matrix.
 */
export function sumMatrix(m: number[][]): number {
  let total = 0;
  for (const row of m) {
    for (const value of row) {
      total += value;
    }
  }
  return total;
}
