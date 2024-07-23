import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((details) => {
      let body; let firstName; let lastName = '';
      for (const detail of details) {
        if (Object.prototype.hasOwnProperty.call(detail, 'body')) {
          body = detail.body;
        }
        if (Object.prototype.hasOwnProperty.call(detail, 'firstName')) {
          firstName = detail.firstName;
        }
        if (Object.prototype.hasOwnProperty.call(detail, 'lastName')) {
          lastName = detail.lastName;
        }
      }
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
