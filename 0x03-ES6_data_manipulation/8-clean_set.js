export default function cleanSet(set, startString) {
  const word = [];
  if (typeof startString !== 'string' || !(set instanceof Set) || !startString) return '';
  const slicer = startString.length;
  set.forEach((i) => {
    if (i && i.startsWith(startString)) {
      word.push(i.slice(slicer));
    }
  });
  return word.join('-');
}
