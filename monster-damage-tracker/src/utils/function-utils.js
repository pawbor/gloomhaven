export function pipe(...fns) {
  return fns.reduce((f1, f2) => (x) => f2(f1(x)));
}

export function constant(x) {
  return () => x;
}

export function extractProperty(name) {
  return (x) => x[name];
}

export function noop() {}

export function identity(x) {
  return x;
}

export function isTruthy(x) {
  return !!x;
}

export function isFalsy(x) {
  return !x;
}

export function isSet(x) {
  return x !== undefined && x !== null;
}
