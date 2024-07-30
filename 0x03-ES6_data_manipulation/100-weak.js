export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    let count = weakMap.get(endpoint);
    count += 1;
    weakMap.set(endpoint, count);
    if (count >= 5) throw Error('Endpoint load is high');
    return count;
  }
  weakMap.set(endpoint, 1);
  return 1;
}
