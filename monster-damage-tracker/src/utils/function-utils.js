export const pipe = (...fns) => initialX =>
  fns.reduce((f1, f2) => (x, initialX) =>
    f2(f1(x, initialX), initialX)
  )(initialX, initialX);

export const noop = () => {};

export const identity = x => x;

export const isTruthy = x => !!x;

export const isFalsy = x => !x;

export const isSet = x => x !== undefined && x !== null;
