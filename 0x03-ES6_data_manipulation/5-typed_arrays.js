export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') throw Error();
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer, 0);
  try {
    dataview.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return dataview;
}
