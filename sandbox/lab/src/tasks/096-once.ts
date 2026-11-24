export function once(fn: () => number): () => number {
  let called = false;
  let result: number;

  return (): number => {
    if (!called) {
      called = true;
      result = fn();
    }

    return result;
  };
}