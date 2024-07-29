export default function getStudentsByLocation(studentsList, city) {
  if (typeof city !== 'string') throw Error();
  if (!(studentsList instanceof Array)) throw Error();
  return studentsList.filter((student) => student.location === city);
}
