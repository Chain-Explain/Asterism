/**
 * Task 063: kmToMiles
 *
 * Convert kilometres to miles (1 km = 0.621371 mi), rounded to 2 decimals.
 */
export function kmToMiles(km: number): number {
  return Math.round(km * 0.621371 * 100) / 100;
}
