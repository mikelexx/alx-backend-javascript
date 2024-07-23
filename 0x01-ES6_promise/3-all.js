import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((res) => {
    process.stdout.write(res.body);
    process.stdout.write(' ');
  });
  createUser().then((res) => {
    process.stdout.write(res.firstName);
    process.stdout.write(' ');
    console.log(res.lastName);
  });
}
