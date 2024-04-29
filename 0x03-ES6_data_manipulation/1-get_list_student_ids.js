export default function getListStudentIds(list) {
  return Array.isArray(list) ? list.map((i) => (i.id)) : [];
}
