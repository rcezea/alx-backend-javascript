import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]).then(([userResult, photoResult]) => {
    const userStatus = userResult.status;
    const photoStatus = photoResult.status;

    return [
      { status: userStatus, value: userResult.value},
      { status: photoStatus, value: `Error: ${photoResult.reason.message}` }
    ];
  })
}
