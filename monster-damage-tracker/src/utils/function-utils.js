export const noop = () => {};

export const identity = x => x;

export const isTruthy = x => !!x;

export const isFalsy = x => !x;

export const isSet = x => x !== undefined && x !== null;
