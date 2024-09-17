const express = require('express');
const process = require('process');
const fs = require('fs');

const path = process.argv[2];

const app = express();
app.listen(1245);
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (_, res) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    res.write('This is the list of our students\n');
    if (err) {
      res.end('Cannot load the database');
      return;
    }
    const students = data.split('\n').slice(1, -1);
    const fields = {};
    res.write(`Number of students: ${students.length}`);
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
      res.write(`\nNumber of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
    }
    res.end();
  });
});
