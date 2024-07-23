import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const outcomes = [];
  try {
    const user = await signUpUser(firstName, lastName);
    await uploadPhoto(fileName);
    outcomes.push({ status: 'fulfilled', value: user });
  } catch (error) {
    outcomes.push({ status: 'rejected', value: error });
  }
  return outcomes;
}
