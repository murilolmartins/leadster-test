// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortArray = (array: any[], key: string) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
};
