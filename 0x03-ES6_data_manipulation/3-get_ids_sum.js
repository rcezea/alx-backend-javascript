export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + Number(student.id), 0);
}
