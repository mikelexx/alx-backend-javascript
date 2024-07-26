import listOfStudents from './9-hoisting.js';
import wtf from './9-hoisting.js';

console.log(listOfStudents);
console.log(wtf);

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription
);

console.log(listPrinted);
