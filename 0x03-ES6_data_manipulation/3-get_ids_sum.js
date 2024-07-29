export default function getStudentIdsSum(studentsList) {
  if (!(studentsList instanceof Array)) throw Error();
  const sumIds = (count, student) => count + student.id;
  return studentsList.reduce(sumIds, 0);
}
