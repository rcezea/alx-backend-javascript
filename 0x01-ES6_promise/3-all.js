import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    let str = '';

    return uploadPhoto()
        .then((resp) => {
            str += `${resp.body} `;
            return createUser();
        })
        .then((resp) => {
            str += `${resp.firstName} ${resp.lastName}`;
            console.log(str);
        })
        .catch(() => {
            console.log('Signup system offline');
            return str;
        });
}
