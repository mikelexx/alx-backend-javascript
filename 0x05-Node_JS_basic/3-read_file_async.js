const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err || data === 'undefined') {
        reject(Error('Cannot load the database'));
      } else {
        const students = data.split('\n').slice(1, -1);
        const fields = {};
        console.log(`Number of students: ${students.length}`);
        students.forEach((stud) => {
          const field = stud.split(',').slice(-1)[0];
          const firstName = stud.split(',')[0];
          if (Array.isArray(fields[field])) {
            fields[field].push(firstName);
          } else {
            fields[field] = [firstName];
          }
        });
        for (const [key, val] of Object.entries(fields)) {
          console.log(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
        }
        resolve();
      }
    });
  });
}
module.exports = countStudents;
