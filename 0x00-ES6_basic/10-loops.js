export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const element of array) {
    arr[array.indexOf(element)] = appendString + element;
  }

  return arr;
}
