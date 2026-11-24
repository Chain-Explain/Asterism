export function memoize(fn: (n: number) => number): (n: number) => number {
  const cache = new Map<number, number>();

  return (n: number): number => {
    if (cache.has(n)) {
      return cache.get(n)!;
    }

    const result = fn(n);
    cache.set(n, result);
    return result;
  };
}