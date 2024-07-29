export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') throw Error();
  if (!(set instanceof Set)) throw Error();
  let res = '';
  set.forEach((val) => {
    const valStart = val.slice(0, startString.length);
    if (valStart === startString && startString.length > 0) {
      const rest = val.slice(valStart.length);
      if (res.length > 0) {
        res += '-';
        res += rest;
      } else {
        res += rest;
      }
    }
  });
  return res;
}
