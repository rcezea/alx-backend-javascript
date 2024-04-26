export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw TypeError;
    }
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw TypeError;
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    throw TypeError;
  }
}
