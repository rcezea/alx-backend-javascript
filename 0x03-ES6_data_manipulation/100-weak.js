export const weakMap = new WeakMap();

export function count(endpoint) {
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
  return weakMap.get(endpoint);
}

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  count(endpoint);
}
