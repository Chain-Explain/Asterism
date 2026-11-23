/**
 * Task 023: truncate
 *
 * Shortens a string to exactly `max` characters, ending with an ellipsis.
 */
export function truncate(s: string, max: number): string {
  if (max <= 0) return "";

  const characters = Array.from(s);
  if (characters.length <= max) return s;

  return `${characters.slice(0, max - 1).join("")}…`;
}
