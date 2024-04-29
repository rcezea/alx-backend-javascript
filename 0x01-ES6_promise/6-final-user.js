import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]).then(([userResult, photoResult]) => {
    const userStatus = userResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';
    const photoStatus = photoResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';

    return [
      { status: userStatus, value: userResult.value},
      { status: photoStatus, value: photoStatus === 'fulfilled' ? photoResult.value : `Error: ${photoResult.reason.message}` }
    ];
  })
}
