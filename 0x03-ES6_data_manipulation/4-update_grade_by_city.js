/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((x) => x.location === city).map((old) => {
    newGrade.map((value) => {
      if (old.id === value.studentId) {
        old.grade = value.grade;
      } else {
        old.grade = 'N/A';
      }
      return old;
    });
    return old;
  });
}
