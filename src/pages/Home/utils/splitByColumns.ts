export const splitByColumns = (array: Record<string, unknown>[], chunkSize: number = 3) => {
  const result: Record<string, unknown>[][] = Array.from({ length: chunkSize }, () => []);

  for (let i = 0; i < array.length; i++) {
    const columnIndex = i % chunkSize;
    result[columnIndex].push(array[i]);
  }

  return result;
};
