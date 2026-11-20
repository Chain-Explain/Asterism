/**
 * Task 072: isWeekend
 *
 * True when an ISO `YYYY-MM-DD` date (UTC) falls on Saturday or Sunday.
 */
export function isWeekend(iso: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    throw new RangeError("expected a YYYY-MM-DD date");
  }

  const date = new Date(`${iso}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== iso) {
    throw new RangeError("invalid calendar date");
  }

  const day = date.getUTCDay();
  return day === 0 || day === 6;
}
