interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [contract: string]: any;
}

interface Directors extends Teacher{
    numberOfReports: number;
}


interface printTeacherFunction {
    (x: string, y: string): void;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    console.log(`${firstName[0]}. ${lastName}`)
}

interface StudentConstructor {
    new (firstName: string, lastName: string): Student;
}

interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
