export const arraysDiff = (array1, array2) =>
  array1.filter(el => array2.indexOf(el) < 0);
