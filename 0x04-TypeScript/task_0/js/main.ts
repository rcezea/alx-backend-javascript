interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Richard",
    lastName: "Ezea",
    age: 22,
    location: "Nigeria",
}

const student2: Student = {
    firstName: "Achike",
    lastName: "Udenwa",
    age: 22,
    location: "Nigeria",
}

const studentsList: Array<Student> = [student1, student2]


const table: HTMLTableElement = document.createElement('table');

// Create table headers
const headerRow: HTMLTableRowElement = table.insertRow();
const header1: HTMLTableCellElement = headerRow.insertCell();
const header2: HTMLTableCellElement = headerRow.insertCell();
header1.textContent = 'First Name';
header2.textContent = 'Location';

// Loop through the students array and append a new row for each student
studentsList.forEach(student => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
