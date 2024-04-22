export default function createIteratorObject(report) {
  const newArray = [];
  for (const i of Object.values(report.allEmployees)) {
    for (const x of i) {
      newArray.push(x);
    }
  }
  return newArray;
}
