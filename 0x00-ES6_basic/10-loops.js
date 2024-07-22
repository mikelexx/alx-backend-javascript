export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    const value = element;
    array[array.indexOf(element)] = appendString + element;
  }

  return array;
}
