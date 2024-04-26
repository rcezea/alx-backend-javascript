import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const newArr = [];
  const one = new ClassRoom(19);
  const two = new ClassRoom(20);
  const three = new ClassRoom(34);
  newArr.push(one);
  newArr.push(two);
  newArr.push(three);
  return newArr;
}

console.log(initializeRooms());
