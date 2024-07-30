export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';
  if (!(set instanceof Set)) throw Error();
  let res = '';
  set.forEach((val) => {
    if (val && val.startsWith(startString)) {
      const rest = val.slice(startString.length);
      if (res.length > 0) {
        res = res.concat('-', rest);
      } else {
        res = rest;
      }
    }
  });
  return res;
}
