export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    if (count >= 5) throw Error('Endpoint load is high');
    weakMap.set(endpoint, count + 1);
    return count + 1;
  }
  weakMap.set(endpoint, 1);
  return 1;
}
