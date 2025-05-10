export const splitByColumns = <T>(array: T[], chunkSize: number = 3) => {
  const result: T[][] = Array.from({ length: chunkSize }, () => []);

  for (let i = 0; i < array.length; i++) {
    const columnIndex = i % chunkSize;
    result[columnIndex].push(array[i]);
  }

  return result;
};
