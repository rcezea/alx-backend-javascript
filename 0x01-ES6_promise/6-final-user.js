import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
//   const user = signUpUser(firstName, lastName);
//   const photo = uploadPhoto(fileName);
  const newArray = [];
  const results = await
  Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  for (const result of results) {
    if (result.status === 'fulfilled') {
      newArray.push(result);
    } else {
      newArray.push(result);
    }
  }
  return newArray;
}
