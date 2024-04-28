import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newArray = [];
  Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([result, result2]) => {
      if (result.status === 'fulfilled') {
        newArray.push(result);
      }
      if (result2.status !== 'fulfilled') {
        // eslint-disable-next-line no-param-reassign
        result2.value = `Error: ${result2.reason.message}`;
        // eslint-disable-next-line no-param-reassign
        delete result.reason;
        newArray.push(result);
      }
      return newArray;
    });
}
