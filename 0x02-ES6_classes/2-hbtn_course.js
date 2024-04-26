export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
    if (typeof students === 'object') {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw TypeError('student must be a string');
        }
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof students === 'object') {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw TypeError('student must be a string');
        }
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
