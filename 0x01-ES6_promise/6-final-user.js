import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]).then(([userResult, photoResult]) => {
    const userStatus = userResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';
    const photoStatus = photoResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';

    return [
      {
        user: {
          status: userStatus,
          value: userStatus === 'fulfilled' ? userResult.value : `Error: ${userResult.reason.message}`
        }
      },
      {
        photo: {
          status: photoStatus,
          value: photoStatus === 'fulfilled' ? photoResult.value : `Error: ${photoResult.reason.message}`
        }
      }
    ];
  });
}
