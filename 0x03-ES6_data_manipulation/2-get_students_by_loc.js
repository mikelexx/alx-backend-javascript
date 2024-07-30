import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(studentsList = getListStudents(), city) {
  return studentsList.filter((student) => student.location === city);
}
