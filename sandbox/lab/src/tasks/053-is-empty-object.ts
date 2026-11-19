/**
 * Task 053: isEmptyObject
 *
 * True when the object has no own enumerable keys.
 */
export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}
