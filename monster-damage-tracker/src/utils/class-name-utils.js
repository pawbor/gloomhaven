import { toKeyValuePairs } from './hash-map-utils';

export const classNameFromHashMap = hashMap =>
  toKeyValuePairs(hashMap)
    .filter(({ value }) => value)
    .map(({ key }) => key)
    .join(' ');
