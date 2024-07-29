export default function hasValuesFromArray(aset, arr) {
  if (!(aset instanceof Set)) throw Error();
  if (!(arr instanceof Array)) throw Error();
  for (const el of arr) {
    if (!aset.has(el)) return false;
  }
  return true;
}
