// eslint-disable-next-line import/no-mutable-exports
export let weakMap;
export default weakMap = new WeakMap();

// function count(endpoint) {
//   weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
//   return weakMap.get(endpoint);
// }

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
}
