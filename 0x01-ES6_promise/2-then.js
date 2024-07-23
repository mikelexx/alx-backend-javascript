export default function handleResponseFromAPI (promise) {
  /* eslint-disable no-unused-vars */
  promise.then((value) => ({
    status: 200,
    body: 'success'
  })).catch((error) => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
  /* eslint-disable no-unused-vars */
}
