const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    if (!data) {
      throw new Error('Cannot load the database');
    }


    const lines = data.split('\n').filter(line => line.trim() !== '');
    console.log(lines)

    const students = {};
    let totalStudents = 0;

    lines.forEach((line, index) => {
      if (index === 0) return;

      const [firstname, , , field] = line.split(',');

      if (firstname && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents++;
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
