export default function getListStudentIds(list) {
  const newArray = [];
  for (const i of list) {
    if (i.id) {
      newArray.push(i.id);
    }
  }
  return newArray;
}
