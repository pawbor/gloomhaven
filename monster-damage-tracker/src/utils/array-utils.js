export const arraysDiff = (array1, array2) =>
  array1.filter(el => array2.indexOf(el) < 0);

export const toggleArrayElement = (array, element) =>
  array.indexOf(element) < 0
    ? [...array, element]
    : array.filter(el => el !== element);

export const sequence = length =>
  Array.from({ length }, (_, ii) => ii);
