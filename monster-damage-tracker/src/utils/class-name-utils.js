import { hashMapToArray } from './hash-map-utils';

export const classNameFromHashMap = hashMap =>
  hashMapToArray(hashMap)
    .filter(({ value }) => value)
    .map(({ key }) => key)
    .join(' ');
