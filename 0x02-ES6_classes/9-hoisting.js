export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  set year(year) {
    if (typeof year === 'number') {
      this._year = year;
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
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(firstName) {
    if (typeof firstName === 'string') {
      this._firstName = firstName;
    } else {
      throw TypeError;
    }
  }

  set lastName(lastName) {
    if (typeof this.lastName === 'string') {
      this._lastName = this.lastName;
    } else {
      throw TypeError;
    }
  }

  set holbertonClass(holbertonClass) {
    if (holbertonClass instanceof HolbertonClass) {
      this._holbertonClass = holbertonClass;
    } else {
      throw TypeError;
    }
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
