import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(studentsList = getListStudents(), city) {
  if (typeof city !== 'string') throw Error();
  if (!Array.isArray(studentsList)) throw Error();
  return studentsList.filter((student) => student.location === city);
}
