export default function getStudentsByLocation(studentsList, city) {
  if (typeof city !== 'string') throw Error();
  if (!Array.isArray(studentsList)) throw Error();
  return studentsList.filter((student) => student.location === city);
}
