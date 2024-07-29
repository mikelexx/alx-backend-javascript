export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!(studentsList instanceof Array)) throw Error();
  if (!(newGrades instanceof Array)) throw Error();
  if (typeof city !== 'string') throw Error();
  const updatedStudents = studentsList.filter((student) => {
    let found = false;
    newGrades.map((gradeObj) => {
      if (gradeObj.studentId === student.id) {
        found = true;
        Object.defineProperty(student, 'grade', { value: gradeObj.grade, writable: true, enumerable: true });
      }
      return student;
    });
    if (!found) {
      Object.defineProperty(student, 'grade', { value: 'N/A', writable: true, enumerable: true });
    }
    return student.location === city;
  });
  return updatedStudents;
}
