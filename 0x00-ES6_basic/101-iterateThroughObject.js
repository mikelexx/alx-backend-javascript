export default function iterateThroughObject(reportWithIterator) {
  let res = '';
  for (const name of reportWithIterator) {
    res = res === '' ? res + name : `${res} | ${name}`;
  }
  return res;
}
