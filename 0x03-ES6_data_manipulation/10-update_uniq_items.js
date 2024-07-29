export default function updateUniqueItems (amap) {
  if (!(amap instanceof Map)) throw Error('Cannot process');
  amap.forEach((val, key) => {
	  if (val === 1) {
		  amap.set(key, 100);
	  }
  });
  return amap;
}
