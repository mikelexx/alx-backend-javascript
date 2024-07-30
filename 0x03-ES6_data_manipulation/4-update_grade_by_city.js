import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(
  studentsList = getListStudents(), city, newGrades,
) {
  if (!(studentsList instanceof Array)) throw Error();
  if (!(newGrades instanceof Array)) throw Error();
  if (typeof city !== 'string') throw Error();

  return studentsList.filter((student) => student.location === city).map((stud) => {
    const gradeObj = newGrades.filter((grade) => grade.studentId === stud.id);
    const updatedStud = { ...stud, grade: gradeObj.length > 0 ? gradeObj[0].grade : 'N/A' };
    return updatedStud;
  });
}
