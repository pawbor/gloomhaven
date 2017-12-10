export const hashMapToArray = hashMap =>
  Object.keys(hashMap).map(key => ({
    key,
    value: hashMap[key],
  }));

export const arrayToHashMap = keyExtractor => array =>
  array.reduce((hashMap, value) => {
    const key = keyExtractor(value);
    return {
      ...hashMap,
      [key]: value,
    };
  }, {});

export const arrayToHashMapByProperty = propertyName =>
  arrayToHashMap(extractKeyFromProperty(propertyName));

export const extractKeyFromProperty = propertyName => value => {
  const key = value[propertyName];
  validateKey(key);
  return key;
};

function validateKey(key) {
  const typeOfKey = typeof key;

  switch (typeOfKey) {
    case 'string':
    case 'number': {
      return;
    }
    default: {
      throw new Error(
        `Unsupported property type ${typeOfKey}`
      );
    }
  }
}
