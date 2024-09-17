const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const students = data.split('\n').slice(1, -1);
      const fields = {};
      students.forEach((stud) => {
        const field = stud.split(',').slice(-1)[0];
        const firstName = stud.split(',')[0];
        if (Array.isArray(fields[field])) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      });
      resolve(fields);
    });
  });
}
