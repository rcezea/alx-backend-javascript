export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    if (typeof brand === 'string') {
      this._brand = brand;
    } else {
      throw TypeError;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    if (typeof motor === 'string') {
      this._motor = motor;
    } else {
      throw TypeError;
    }
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (typeof color === 'string') {
      this._color = color;
    } else {
      throw TypeError;
    }
  }

  cloneCar() {
    return new this();
  }
}
