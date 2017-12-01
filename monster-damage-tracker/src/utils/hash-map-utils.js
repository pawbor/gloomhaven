export const toArray = mapper => hashMap =>
  Object.keys(hashMap).map(key =>
    mapper(hashMap[key], key)
  );

export const toKeyValuePairs = toArray((value, key) => ({
  key,
  value,
}));

export const toHashMap = keyExtractor => array =>
  array.reduce((hashMap, value) => {
    const key = keyExtractor(value);
    return {
      ...hashMap,
      [key]: value,
    };
  }, {});

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
