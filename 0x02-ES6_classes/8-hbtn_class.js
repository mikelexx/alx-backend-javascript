export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error();
    }
    if (typeof location !== 'string') {
      throw new Error();
    }
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    throw new Error();
  }
}
