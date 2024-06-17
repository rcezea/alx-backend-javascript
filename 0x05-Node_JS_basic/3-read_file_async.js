const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

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

      resolve();
    });
  });
}

module.exports = countStudents;
