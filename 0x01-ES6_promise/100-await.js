import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([value, value2]) => ({
      photo: value,
      user: value2,
    })).catch(() => ({
      photo: null,
      user: null,
    }));
}
